@echo off
title ReviveHub Project Structure Creator

echo ==========================================
echo    Creating ReviveHub Folder Structure
echo ==========================================
echo.

:: Create folders
mkdir src
mkdir src\assets
mkdir src\assets\images
mkdir src\assets\logo
mkdir src\assets\icons
mkdir src\assets\videos

mkdir src\components
mkdir src\components\layout
mkdir src\components\home
mkdir src\components\common

mkdir src\pages
mkdir src\data

:: Create Layout Components
type nul > src\components\layout\Navbar.jsx
type nul > src\components\layout\Footer.jsx

:: Create Home Components
type nul > src\components\home\Hero.jsx
type nul > src\components\home\ActionCards.jsx
type nul > src\components\home\FeaturedProducts.jsx
type nul > src\components\home\BeforeAfter.jsx
type nul > src\components\home\WhyReviveHub.jsx
type nul > src\components\home\HowItWorks.jsx
type nul > src\components\home\Impact.jsx
type nul > src\components\home\Testimonials.jsx
type nul > src\components\home\CTA.jsx

:: Create Common Components
type nul > src\components\common\Button.jsx
type nul > src\components\common\Card.jsx

:: Create Pages
type nul > src\pages\Home.jsx
type nul > src\pages\Shop.jsx
type nul > src\pages\Service.jsx
type nul > src\pages\Sell.jsx

:: Create Data File
type nul > src\data\products.js

echo.
echo ==========================================
echo      Folder Structure Created!
echo ==========================================
echo.
pause