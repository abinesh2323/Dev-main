Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Starting AWS Production Deployment" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

$BUCKET_NAME = "abinesh-portfolio-demo-773475891493"
$DISTRIBUTION_ID = "EZZ3MR8AP3HUC"
$AWS_CLI = "C:\Users\abine\AppData\Local\Programs\Amazon\AWSCLIV2\aws.exe"

# 1. Build Static Export
Write-Host "`n[1/3] Building Next.js static export..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Build failed! Aborting deployment to protect live site." -ForegroundColor Red
    exit 1
}

# 2. Sync to S3
Write-Host "`n[2/3] Uploading assets to S3 bucket ($BUCKET_NAME)..." -ForegroundColor Yellow
& $AWS_CLI s3 sync ./out "s3://$BUCKET_NAME" --delete
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] S3 sync failed!" -ForegroundColor Red
    exit 1
}

# 3. Invalidate CloudFront Cache
Write-Host "`n[3/3] Invalidating CloudFront edge cache ($DISTRIBUTION_ID)..." -ForegroundColor Yellow
& $AWS_CLI cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

Write-Host "`n=========================================" -ForegroundColor Green
Write-Host "  Deployment Successful!" -ForegroundColor Green
Write-Host "  Live CloudFront URL: https://dagvmumve8niw.cloudfront.net" -ForegroundColor Green
Write-Host "  S3 Direct URL: http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green