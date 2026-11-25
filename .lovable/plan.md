# Mobile Speed Optimization

## What will change
- Reduce the download size of the largest site photos while preserving their existing look and framing.
- Load only the active day/night homepage background, and prioritize the first-screen image on the homepage and AI Influencer page.
- Keep below-the-fold imagery lazy-loaded.

## How it will be checked
- Test the homepage at a mobile-sized viewport on a throttled connection.
- Confirm the unused theme image is not requested, first-screen images load promptly, and both themes still render correctly.
- Compare image transfer sizes before and after.

## Technical notes
- Current mobile visitor data for the last seven days shows homepage LCP p75 of 2.12 seconds from 5 readings and FCP p75 of 1.9 seconds from 7 readings; this sample is too small for a reliable trend. The simulated mobile run downloaded both homepage theme backgrounds, including a 1.18 MB image. Optimization will focus on image delivery rather than route splitting.
