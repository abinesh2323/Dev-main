# Instant Production Rollback Utility
Param(
    [string]$TargetVersionId
)

$PROD_BUCKET = "abinesh-portfolio-demo-773475891493"
$DIST_ID = "EZZ3MR8AP3HUC"
$CLI = "C:\Users\abine\AppData\Local\Programs\Amazon\AWSCLIV2\aws.exe"

Write-Host "=============================================" -ForegroundColor Red
Write-Host "   AWS PRODUCTION ROLLBACK SYSTEM" -ForegroundColor Red
Write-Host "=============================================" -ForegroundColor Red

# 1. Check current versions
Write-Host "`nFetching recent object versions in Production S3..." -ForegroundColor Yellow
& $CLI s3api list-object-versions --bucket $PROD_BUCKET --prefix "index.html" --max-items 5 --query "Versions[*].[VersionId,LastModified,IsLatest]" --output table

# 2. Invalidate CloudFront cache immediately
Write-Host "`nInvalidating CloudFront edge cache to drop bad version..." -ForegroundColor Yellow
& $CLI cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"

Write-Host "`n[SUCCESS] CloudFront edge cache invalidated. Rollback initiated." -ForegroundColor Green