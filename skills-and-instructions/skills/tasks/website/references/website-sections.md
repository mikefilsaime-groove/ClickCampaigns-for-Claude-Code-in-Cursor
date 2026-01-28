# Website Sections Reference

This document provides comprehensive templates and examples for all major website page sections. Use these as foundations for building world-class brand websites that convert visitors into customers.

---

## Table of Contents

1. [Homepage Sections](#homepage-sections)
2. [About Page Sections](#about-page-sections)
3. [Services/Products Page Sections](#servicesproducts-page-sections)
4. [Case Studies/Results Page Sections](#case-studiesresults-page-sections)
5. [Contact Page Sections](#contact-page-sections)
6. [Blog/Resources Sections](#blogresources-sections)

---

## Homepage Sections

### 1. Hero Section (Above the Fold)

**Purpose:** Instantly communicate who you serve, what you offer, and why it matters. Primary conversion point.

#### Template Structure

```html
<section class="hero" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; min-height: 100vh; display: flex; align-items: center;">
  <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">

    <!-- Left Column - Copy -->
    <div>
      <!-- Pre-headline (optional) -->
      <p style="color: rgba(255,255,255,0.8); font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px;">
        For [Target Audience]
      </p>

      <!-- Main Headline -->
      <h1 style="font-size: 52px; line-height: 1.1; margin-bottom: 20px; font-weight: 800;">
        [Transformation Promise in 8-12 Words]
      </h1>

      <!-- Subheadline -->
      <p style="font-size: 20px; opacity: 0.9; margin-bottom: 30px; line-height: 1.5;">
        [Who it's for + Primary Benefit + Without Common Pain Point]
      </p>

      <!-- CTA Buttons -->
      <div style="display: flex; gap: 15px; margin-bottom: 40px;">
        <button style="background: white; color: #667eea; padding: 18px 36px; border: none; border-radius: 8px; font-size: 18px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
          [Primary CTA - Action Verb]
        </button>
        <button style="background: transparent; color: white; padding: 18px 36px; border: 2px solid white; border-radius: 8px; font-size: 18px; cursor: pointer;">
          [Secondary CTA - Lower Commitment]
        </button>
      </div>

      <!-- Social Proof Numbers -->
      <div style="display: flex; gap: 40px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 30px;">
        <div>
          <p style="font-size: 36px; font-weight: bold; margin: 0; margin-bottom: 5px;">[Number]+</p>
          <p style="font-size: 14px; opacity: 0.8; margin: 0;">[Metric Name]</p>
        </div>
        <div>
          <p style="font-size: 36px; font-weight: bold; margin: 0; margin-bottom: 5px;">$[Amount]</p>
          <p style="font-size: 14px; opacity: 0.8; margin: 0;">[Achievement]</p>
        </div>
        <div>
          <p style="font-size: 36px; font-weight: bold; margin: 0; margin-bottom: 5px;">[Rating]★</p>
          <p style="font-size: 14px; opacity: 0.8; margin: 0;">[Reviews/Rating Source]</p>
        </div>
      </div>
    </div>

    <!-- Right Column - Visual -->
    <div style="text-align: center;">
      <img src="hero-image.jpg" alt="[Descriptive alt text]" style="max-width: 100%; border-radius: 20px; box-shadow: 0 40px 80px rgba(0,0,0,0.3);" />
      <!-- OR: Video embed, Product mockup, Illustrated graphic -->
    </div>

  </div>
</section>
```

#### Example: Business Coach

```html
<section class="hero" style="background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%); color: white; padding: 100px 20px;">
  <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">

    <div>
      <p style="color: #9F7AEA; font-size: 14px; letter-spacing: 2px; margin-bottom: 15px;">
        BUSINESS COACH & CONSULTANT
      </p>

      <h1 style="font-size: 52px; line-height: 1.1; margin-bottom: 20px;">
        Build a Business That Works—Even When You Don't
      </h1>

      <p style="font-size: 20px; opacity: 0.9; margin-bottom: 30px;">
        I help ambitious entrepreneurs scale from 6 to 7 figures without sacrificing their health, relationships, or sanity.
      </p>

      <div style="display: flex; gap: 15px; margin-bottom: 40px;">
        <button style="background: #9F7AEA; color: white; padding: 16px 32px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
          Book a Free Strategy Call
        </button>
        <button style="background: transparent; color: white; padding: 16px 32px; border: 2px solid white; border-radius: 8px; font-size: 16px; cursor: pointer;">
          Watch My Story
        </button>
      </div>

      <div style="display: flex; gap: 30px;">
        <div>
          <p style="font-size: 32px; font-weight: bold; margin: 0;">500+</p>
          <p style="font-size: 14px; opacity: 0.7; margin: 0;">Clients Served</p>
        </div>
        <div>
          <p style="font-size: 32px; font-weight: bold; margin: 0;">$127M+</p>
          <p style="font-size: 14px; opacity: 0.7; margin: 0;">Client Revenue Generated</p>
        </div>
        <div>
          <p style="font-size: 32px; font-weight: bold; margin: 0;">4.9★</p>
          <p style="font-size: 14px; opacity: 0.7; margin: 0;">Average Rating</p>
        </div>
      </div>
    </div>

    <div style="text-align: center;">
      <img src="hero-image.jpg" alt="Professional headshot" style="max-width: 100%; border-radius: 20px; box-shadow: 0 40px 80px rgba(0,0,0,0.3);" />
    </div>

  </div>
</section>
```

---

### 2. Brand Positioning Section

**Purpose:** Build immediate credibility through logos, media mentions, or client brands.

#### Template

```html
<section style="background: white; padding: 60px 20px; text-align: center;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <p style="color: #718096; font-size: 14px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 30px;">
      Trusted By / Featured In / As Seen In
    </p>

    <div style="display: flex; justify-content: center; align-items: center; gap: 50px; flex-wrap: wrap;">
      <img src="logo1.png" alt="Company 1" style="height: 40px; opacity: 0.6; filter: grayscale(100%);" />
      <img src="logo2.png" alt="Company 2" style="height: 40px; opacity: 0.6; filter: grayscale(100%);" />
      <img src="logo3.png" alt="Company 3" style="height: 40px; opacity: 0.6; filter: grayscale(100%);" />
      <img src="logo4.png" alt="Company 4" style="height: 40px; opacity: 0.6; filter: grayscale(100%);" />
      <img src="logo5.png" alt="Company 5" style="height: 40px; opacity: 0.6; filter: grayscale(100%);" />
    </div>

  </div>
</section>
```

---

### 3. Core Benefits Section

**Purpose:** Communicate 3-5 primary value propositions with supporting details.

#### Template

```html
<section style="padding: 100px 20px; background: #F7FAFC;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <!-- Section Header -->
    <div style="text-align: center; margin-bottom: 60px;">
      <h2 style="font-size: 42px; color: #1A202C; margin-bottom: 15px;">
        [Main Outcome/Promise]
      </h2>
      <p style="font-size: 18px; color: #718096; max-width: 600px; margin: 0 auto;">
        [Supporting explanation of how/why]
      </p>
    </div>

    <!-- Benefits Grid -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;">

      <!-- Benefit 1 -->
      <div style="text-align: center;">
        <div style="width: 80px; height: 80px; background: #EBF4FF; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          <span style="font-size: 40px;">🎯</span>
        </div>
        <h3 style="font-size: 22px; color: #1A202C; margin-bottom: 12px;">
          [Benefit Headline]
        </h3>
        <p style="color: #4A5568; line-height: 1.7;">
          [2-3 sentence explanation of this specific benefit and what it means for them]
        </p>
      </div>

      <!-- Benefit 2 -->
      <div style="text-align: center;">
        <div style="width: 80px; height: 80px; background: #FFF5F5; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          <span style="font-size: 40px;">⚡</span>
        </div>
        <h3 style="font-size: 22px; color: #1A202C; margin-bottom: 12px;">
          [Benefit Headline]
        </h3>
        <p style="color: #4A5568; line-height: 1.7;">
          [2-3 sentence explanation]
        </p>
      </div>

      <!-- Benefit 3 -->
      <div style="text-align: center;">
        <div style="width: 80px; height: 80px; background: #F0FFF4; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          <span style="font-size: 40px;">🚀</span>
        </div>
        <h3 style="font-size: 22px; color: #1A202C; margin-bottom: 12px;">
          [Benefit Headline]
        </h3>
        <p style="color: #4A5568; line-height: 1.7;">
          [2-3 sentence explanation]
        </p>
      </div>

    </div>

  </div>
</section>
```

---

### 4. Testimonials Section

**Purpose:** Build trust through social proof with authentic client results.

#### Template: Carousel Style

```html
<section style="padding: 100px 20px; background: white;">
  <div style="max-width: 900px; margin: 0 auto; text-align: center;">

    <h2 style="font-size: 38px; color: #1A202C; margin-bottom: 50px;">
      What Our Clients Say
    </h2>

    <!-- Testimonial Card -->
    <div style="background: #F7FAFC; border-radius: 16px; padding: 50px; position: relative;">

      <!-- Quote Icon -->
      <div style="position: absolute; top: 30px; left: 30px; font-size: 60px; color: #E2E8F0;">"</div>

      <!-- Testimonial Text -->
      <p style="font-size: 20px; color: #2D3748; line-height: 1.7; margin-bottom: 30px; font-style: italic;">
        "[Full testimonial quote that tells a mini-story: where they were before, what changed, specific results they achieved, and how they feel now]"
      </p>

      <!-- Client Info -->
      <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
        <img src="client-photo.jpg" alt="Client name" style="width: 60px; height: 60px; border-radius: 50%; border: 3px solid white;" />
        <div style="text-align: left;">
          <p style="font-weight: bold; color: #1A202C; margin: 0; font-size: 16px;">[Client Name]</p>
          <p style="color: #718096; margin: 0; font-size: 14px;">[Title/Company]</p>
        </div>
      </div>

      <!-- Star Rating -->
      <div style="margin-top: 20px; color: #F6AD55; font-size: 20px;">
        ★★★★★
      </div>

    </div>

    <!-- Carousel Controls (if multiple testimonials) -->
    <div style="margin-top: 30px; display: flex; justify-content: center; gap: 10px;">
      <button style="width: 12px; height: 12px; border-radius: 50%; background: #CBD5E0; border: none; cursor: pointer;"></button>
      <button style="width: 12px; height: 12px; border-radius: 50%; background: #4299E1; border: none; cursor: pointer;"></button>
      <button style="width: 12px; height: 12px; border-radius: 50%; background: #CBD5E0; border: none; cursor: pointer;"></button>
    </div>

  </div>
</section>
```

#### Template: Grid Style (Multiple Testimonials)

```html
<section style="padding: 100px 20px; background: #F7FAFC;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <h2 style="text-align: center; font-size: 38px; color: #1A202C; margin-bottom: 60px;">
      Real Results from Real People
    </h2>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;">

      <!-- Testimonial 1 -->
      <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <div style="color: #F6AD55; font-size: 16px; margin-bottom: 15px;">★★★★★</div>
        <p style="color: #4A5568; line-height: 1.6; margin-bottom: 20px;">
          "[Concise testimonial focusing on one specific result or transformation]"
        </p>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="client1.jpg" alt="Client 1" style="width: 45px; height: 45px; border-radius: 50%;" />
          <div>
            <p style="font-weight: bold; color: #1A202C; margin: 0; font-size: 14px;">[Name]</p>
            <p style="color: #718096; margin: 0; font-size: 13px;">[Title]</p>
          </div>
        </div>
      </div>

      <!-- Repeat for testimonials 2-6 -->

    </div>

  </div>
</section>
```

---

### 5. Services Overview Section

**Purpose:** Introduce service offerings with clear CTAs for deeper exploration.

#### Template

```html
<section style="padding: 100px 20px; background: white;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <div style="text-align: center; margin-bottom: 60px;">
      <h2 style="font-size: 42px; color: #1A202C; margin-bottom: 15px;">
        How We Help You [Achieve Outcome]
      </h2>
      <p style="font-size: 18px; color: #718096; max-width: 600px; margin: 0 auto;">
        Choose the path that fits your goals and timeline
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;">

      <!-- Service Card 1 -->
      <div style="background: #F7FAFC; border-radius: 16px; padding: 40px; text-align: center; position: relative;">
        <div style="width: 70px; height: 70px; background: #EBF4FF; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          📚
        </div>
        <h3 style="font-size: 24px; color: #1A202C; margin-bottom: 15px;">
          [Service Name]
        </h3>
        <p style="color: #718096; margin-bottom: 25px; line-height: 1.6;">
          [2-3 sentence description of what this service delivers and who it's for]
        </p>
        <button style="width: 100%; background: #4299E1; color: white; padding: 14px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
          Learn More →
        </button>
      </div>

      <!-- Service Card 2 (Featured) -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; padding: 40px; text-align: center; position: relative; box-shadow: 0 10px 30px rgba(102,126,234,0.3);">
        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #F6E05E; color: #744210; padding: 4px 16px; border-radius: 20px; font-size: 12px; font-weight: bold;">
          MOST POPULAR
        </div>
        <div style="width: 70px; height: 70px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          🎯
        </div>
        <h3 style="font-size: 24px; color: white; margin-bottom: 15px;">
          [Service Name]
        </h3>
        <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px; line-height: 1.6;">
          [Description emphasizing why this is the most popular choice]
        </p>
        <button style="width: 100%; background: white; color: #667eea; padding: 14px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
          Get Started →
        </button>
      </div>

      <!-- Service Card 3 -->
      <div style="background: #F7FAFC; border-radius: 16px; padding: 40px; text-align: center;">
        <div style="width: 70px; height: 70px; background: #FFF5F5; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          👑
        </div>
        <h3 style="font-size: 24px; color: #1A202C; margin-bottom: 15px;">
          [Service Name]
        </h3>
        <p style="color: #718096; margin-bottom: 25px; line-height: 1.6;">
          [Description for premium/high-touch service]
        </p>
        <button style="width: 100%; background: #4299E1; color: white; padding: 14px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
          Apply Now →
        </button>
      </div>

    </div>

  </div>
</section>
```

---

### 6. Lead Magnet / Opt-In Section

**Purpose:** Capture email addresses with irresistible lead magnet offer.

#### Template

```html
<section style="background: linear-gradient(135deg, #4299E1 0%, #3182CE 100%); padding: 80px 20px; color: white;">
  <div style="max-width: 800px; margin: 0 auto; text-align: center;">

    <h2 style="font-size: 38px; margin-bottom: 15px; font-weight: 800;">
      Get Our Free [Lead Magnet Name]
    </h2>

    <p style="font-size: 18px; opacity: 0.9; margin-bottom: 35px; line-height: 1.6;">
      [One sentence describing what they'll learn/get and the transformation it enables]
    </p>

    <!-- What's Included -->
    <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 30px; margin-bottom: 35px; text-align: left; max-width: 500px; margin-left: auto; margin-right: auto;">
      <p style="font-weight: bold; margin-bottom: 15px; text-align: center;">You'll Get:</p>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="position: absolute; left: 0;">✓</span> [Benefit 1]
        </li>
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="position: absolute; left: 0;">✓</span> [Benefit 2]
        </li>
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="position: absolute; left: 0;">✓</span> [Benefit 3]
        </li>
      </ul>
    </div>

    <!-- Opt-in Form -->
    <form style="display: flex; gap: 10px; max-width: 500px; margin: 0 auto;">
      <input type="email" placeholder="Enter your email address" style="flex: 1; padding: 16px; border: none; border-radius: 8px; font-size: 16px;" />
      <button type="submit" style="background: #48BB78; color: white; padding: 16px 32px; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; white-space: nowrap;">
        Get Instant Access
      </button>
    </form>

    <p style="font-size: 13px; opacity: 0.7; margin-top: 15px;">
      No spam. Unsubscribe anytime. We respect your privacy.
    </p>

  </div>
</section>
```

---

## About Page Sections

### 1. Personal Story Section

**Purpose:** Build empathy and relatability through founder/owner story arc.

#### Template

```html
<section style="padding: 80px 20px; background: #F7FAFC;">
  <div style="max-width: 800px; margin: 0 auto;">

    <h2 style="font-size: 36px; color: #1A202C; text-align: center; margin-bottom: 40px;">
      My Story
    </h2>

    <div style="display: flex; gap: 40px; align-items: start; margin-bottom: 40px;">

      <!-- Personal Photo -->
      <img src="personal-photo.jpg" alt="Founder name" style="width: 300px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);" />

      <!-- Story Copy -->
      <div>
        <!-- Opening Hook (The Problem) -->
        <p style="font-size: 18px; color: #4A5568; line-height: 1.8; margin-bottom: 20px;">
          In [year], I was [specific struggle/pain point]. I was [emotional state], [consequence of problem], and wondering if [doubt/fear].
        </p>

        <!-- The Turning Point -->
        <p style="font-size: 18px; color: #4A5568; line-height: 1.8; margin-bottom: 20px;">
          Then [catalyst moment]. I [decision made] with nothing but [resources/mindset] and a vision to [goal].
        </p>

        <!-- The Transformation -->
        <p style="font-size: 18px; color: #4A5568; line-height: 1.8; margin-bottom: 20px;">
          [Timeframe] later, I'd [specific achievement]. I was [new emotional state], [new reality], and [new capability].
        </p>

        <!-- The Mission -->
        <p style="font-size: 18px; color: #4A5568; line-height: 1.8;">
          Now I help [target audience] do the same—[transformation promise in their words].
        </p>
      </div>

    </div>

    <!-- Credentials Bar -->
    <div style="background: white; border-radius: 12px; padding: 30px; text-align: center;">
      <h3 style="color: #1A202C; margin-bottom: 20px; font-size: 18px;">Featured In / Recognized By</h3>
      <div style="display: flex; justify-content: center; gap: 40px; align-items: center; flex-wrap: wrap;">
        <img src="forbes-logo.png" alt="Forbes" style="height: 30px; opacity: 0.6;" />
        <img src="inc-logo.png" alt="Inc" style="height: 30px; opacity: 0.6;" />
        <img src="entrepreneur-logo.png" alt="Entrepreneur" style="height: 30px; opacity: 0.6;" />
        <img src="fast-company-logo.png" alt="Fast Company" style="height: 30px; opacity: 0.6;" />
      </div>
    </div>

  </div>
</section>
```

---

### 2. Professional Bio Section

**Purpose:** Establish credibility through credentials, achievements, and expertise.

#### Template

```html
<section style="padding: 80px 20px; background: white;">
  <div style="max-width: 1000px; margin: 0 auto;">

    <h2 style="font-size: 32px; color: #1A202C; margin-bottom: 40px; text-align: center;">
      Background & Experience
    </h2>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">

      <!-- Left Column: Timeline/Experience -->
      <div>
        <h3 style="color: #2D3748; font-size: 20px; margin-bottom: 20px;">Professional Journey</h3>

        <!-- Timeline Item 1 -->
        <div style="margin-bottom: 30px; padding-left: 25px; border-left: 3px solid #4299E1; position: relative;">
          <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #4299E1; border-radius: 50%;"></div>
          <p style="color: #718096; font-size: 14px; margin-bottom: 5px;">[Year] - [Year/Present]</p>
          <h4 style="color: #1A202C; font-size: 18px; margin-bottom: 8px;">[Title/Role]</h4>
          <p style="color: #4A5568; line-height: 1.6;">[Brief description of role, achievements, impact]</p>
        </div>

        <!-- Timeline Item 2 -->
        <div style="margin-bottom: 30px; padding-left: 25px; border-left: 3px solid #4299E1; position: relative;">
          <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #4299E1; border-radius: 50%;"></div>
          <p style="color: #718096; font-size: 14px; margin-bottom: 5px;">[Year] - [Year]</p>
          <h4 style="color: #1A202C; font-size: 18px; margin-bottom: 8px;">[Title/Role]</h4>
          <p style="color: #4A5568; line-height: 1.6;">[Description]</p>
        </div>

        <!-- Timeline Item 3 -->
        <div style="padding-left: 25px; border-left: 3px solid #4299E1; position: relative;">
          <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #4299E1; border-radius: 50%;"></div>
          <p style="color: #718096; font-size: 14px; margin-bottom: 5px;">[Year] - [Year]</p>
          <h4 style="color: #1A202C; font-size: 18px; margin-bottom: 8px;">[Title/Role]</h4>
          <p style="color: #4A5568; line-height: 1.6;">[Description]</p>
        </div>
      </div>

      <!-- Right Column: Achievements & Recognition -->
      <div>
        <h3 style="color: #2D3748; font-size: 20px; margin-bottom: 20px;">Recognition & Results</h3>

        <!-- Achievement 1 -->
        <div style="background: #F7FAFC; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
          <h4 style="color: #1A202C; font-size: 16px; margin-bottom: 8px;">🏆 [Award/Recognition]</h4>
          <p style="color: #4A5568; font-size: 14px; line-height: 1.5;">[Brief context]</p>
        </div>

        <!-- Achievement 2 -->
        <div style="background: #F7FAFC; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
          <h4 style="color: #1A202C; font-size: 16px; margin-bottom: 8px;">📚 [Publication/Speaking]</h4>
          <p style="color: #4A5568; font-size: 14px; line-height: 1.5;">[Details]</p>
        </div>

        <!-- Achievement 3 -->
        <div style="background: #F7FAFC; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
          <h4 style="color: #1A202C; font-size: 16px; margin-bottom: 8px;">💡 [Certification/Expertise]</h4>
          <p style="color: #4A5568; font-size: 14px; line-height: 1.5;">[Description]</p>
        </div>

        <!-- Stats Box -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 25px; color: white; text-align: center;">
          <p style="font-size: 36px; font-weight: bold; margin: 0; margin-bottom: 5px;">[Number]+</p>
          <p style="font-size: 14px; opacity: 0.9; margin: 0;">[Impressive Metric]</p>
        </div>

      </div>

    </div>

  </div>
</section>
```

---

### 3. Vision & Values Section

**Purpose:** Communicate mission, core values, and bigger purpose.

#### Template

```html
<section style="padding: 80px 20px; background: #F7FAFC;">
  <div style="max-width: 900px; margin: 0 auto; text-align: center;">

    <h2 style="font-size: 36px; color: #1A202C; margin-bottom: 20px;">
      Why I Do This
    </h2>

    <p style="font-size: 20px; color: #4A5568; line-height: 1.7; margin-bottom: 50px;">
      [Mission statement: 2-3 sentences about the bigger why, the change you want to see in the world, the impact you're driving toward]
    </p>

    <!-- Core Values Grid -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 50px;">

      <!-- Value 1 -->
      <div>
        <div style="width: 60px; height: 60px; background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          💪
        </div>
        <h3 style="font-size: 18px; color: #1A202C; margin-bottom: 10px;">[Value Name]</h3>
        <p style="color: #718096; font-size: 14px; line-height: 1.6;">[What this value means in practice]</p>
      </div>

      <!-- Value 2 -->
      <div>
        <div style="width: 60px; height: 60px; background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          🎯
        </div>
        <h3 style="font-size: 18px; color: #1A202C; margin-bottom: 10px;">[Value Name]</h3>
        <p style="color: #718096; font-size: 14px; line-height: 1.6;">[Explanation]</p>
      </div>

      <!-- Value 3 -->
      <div>
        <div style="width: 60px; height: 60px; background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          ❤️
        </div>
        <h3 style="font-size: 18px; color: #1A202C; margin-bottom: 10px;">[Value Name]</h3>
        <p style="color: #718096; font-size: 14px; line-height: 1.6;">[Explanation]</p>
      </div>

    </div>

  </div>
</section>
```

---

## Services/Products Page Sections

### 1. Services Headline & Overview

**Purpose:** Set expectation for service offerings and guide selection.

#### Template

```html
<section style="padding: 100px 20px; background: white; text-align: center;">
  <div style="max-width: 800px; margin: 0 auto;">

    <h1 style="font-size: 48px; color: #1A202C; margin-bottom: 20px;">
      [Outcome-Focused Headline]
    </h1>

    <p style="font-size: 20px; color: #718096; line-height: 1.7; margin-bottom: 40px;">
      [2-3 sentences explaining your approach, philosophy, or how you decide which service is right for whom]
    </p>

    <!-- Quick Selector (Optional) -->
    <div style="background: #EBF8FF; border-left: 4px solid #4299E1; padding: 20px; border-radius: 8px; text-align: left;">
      <p style="font-weight: bold; color: #2C5282; margin-bottom: 10px;">Not sure which is right for you?</p>
      <p style="color: #2D3748;">Book a free 15-minute discovery call and we'll find the perfect fit together.</p>
      <button style="background: #4299E1; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; margin-top: 10px;">
        Schedule Discovery Call →
      </button>
    </div>

  </div>
</section>
```

---

### 2. Detailed Service Cards

**Purpose:** Present each service with benefits, what's included, and clear CTA.

#### Template

```html
<section style="padding: 80px 20px; background: #F7FAFC;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <!-- Service 1: Entry Level -->
    <div style="background: white; border-radius: 16px; padding: 50px; margin-bottom: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center;">

      <!-- Left: Visual/Icon -->
      <div style="text-align: center;">
        <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
          <span style="font-size: 60px;">📚</span>
        </div>
      </div>

      <!-- Right: Details -->
      <div>
        <h2 style="font-size: 32px; color: #1A202C; margin-bottom: 15px;">
          [Service Name]
        </h2>
        <p style="color: #4A5568; font-size: 18px; line-height: 1.7; margin-bottom: 25px;">
          [2-3 sentence description: who it's for, what outcome it delivers, why it works]
        </p>

        <h3 style="font-size: 18px; color: #2D3748; margin-bottom: 15px;">What's Included:</h3>
        <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
          <li style="color: #4A5568; margin-bottom: 10px; padding-left: 25px; position: relative;">
            <span style="position: absolute; left: 0; color: #48BB78;">✓</span> [Deliverable 1]
          </li>
          <li style="color: #4A5568; margin-bottom: 10px; padding-left: 25px; position: relative;">
            <span style="position: absolute; left: 0; color: #48BB78;">✓</span> [Deliverable 2]
          </li>
          <li style="color: #4A5568; margin-bottom: 10px; padding-left: 25px; position: relative;">
            <span style="position: absolute; left: 0; color: #48BB78;">✓</span> [Deliverable 3]
          </li>
        </ul>

        <div style="display: flex; align-items: center; gap: 20px;">
          <button style="background: #4299E1; color: white; padding: 16px 32px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; font-weight: 600;">
            Learn More →
          </button>
          <p style="color: #718096; margin: 0;">Starting at <span style="font-weight: bold; color: #1A202C; font-size: 20px;">$X,XXX</span></p>
        </div>
      </div>

    </div>

    <!-- Repeat for Services 2-3 -->

  </div>
</section>
```

---

### 3. Pricing Comparison Table (Optional)

**Purpose:** Help prospects compare service tiers side-by-side.

#### Template

```html
<section style="padding: 80px 20px; background: white;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <h2 style="text-align: center; font-size: 36px; color: #1A202C; margin-bottom: 50px;">
      Compare Service Levels
    </h2>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">

      <!-- Column 1: Basic -->
      <div style="background: #F7FAFC; border-radius: 12px; padding: 40px; text-align: center;">
        <h3 style="font-size: 22px; color: #1A202C; margin-bottom: 10px;">[Tier 1 Name]</h3>
        <p style="font-size: 36px; color: #1A202C; font-weight: bold; margin-bottom: 5px;">$X,XXX</p>
        <p style="color: #718096; font-size: 14px; margin-bottom: 30px;">per [month/project]</p>

        <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 30px;">
          <li style="margin-bottom: 12px; color: #4A5568;"><span style="color: #48BB78; margin-right: 8px;">✓</span> [Feature 1]</li>
          <li style="margin-bottom: 12px; color: #4A5568;"><span style="color: #48BB78; margin-right: 8px;">✓</span> [Feature 2]</li>
          <li style="margin-bottom: 12px; color: #4A5568;"><span style="color: #48BB78; margin-right: 8px;">✓</span> [Feature 3]</li>
          <li style="margin-bottom: 12px; color: #CBD5E0;"><span style="margin-right: 8px;">✗</span> [Feature 4 - not included]</li>
        </ul>

        <button style="width: 100%; background: #4299E1; color: white; padding: 14px; border: none; border-radius: 8px; cursor: pointer;">
          Get Started
        </button>
      </div>

      <!-- Column 2: Premium (Featured) -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 40px; text-align: center; position: relative; box-shadow: 0 10px 30px rgba(102,126,234,0.3);">
        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #F6E05E; color: #744210; padding: 4px 16px; border-radius: 20px; font-size: 12px; font-weight: bold;">
          RECOMMENDED
        </div>
        <h3 style="font-size: 22px; color: white; margin-bottom: 10px;">[Tier 2 Name]</h3>
        <p style="font-size: 36px; color: white; font-weight: bold; margin-bottom: 5px;">$X,XXX</p>
        <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin-bottom: 30px;">per [month/project]</p>

        <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 30px;">
          <li style="margin-bottom: 12px; color: white;"><span style="margin-right: 8px;">✓</span> [All Tier 1 Features]</li>
          <li style="margin-bottom: 12px; color: white;"><span style="margin-right: 8px;">✓</span> [Premium Feature 1]</li>
          <li style="margin-bottom: 12px; color: white;"><span style="margin-right: 8px;">✓</span> [Premium Feature 2]</li>
          <li style="margin-bottom: 12px; color: white;"><span style="margin-right: 8px;">✓</span> [Premium Feature 3]</li>
        </ul>

        <button style="width: 100%; background: white; color: #667eea; padding: 14px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
          Get Started
        </button>
      </div>

      <!-- Column 3: Enterprise -->
      <div style="background: #F7FAFC; border-radius: 12px; padding: 40px; text-align: center;">
        <h3 style="font-size: 22px; color: #1A202C; margin-bottom: 10px;">[Tier 3 Name]</h3>
        <p style="font-size: 36px; color: #1A202C; font-weight: bold; margin-bottom: 5px;">Custom</p>
        <p style="color: #718096; font-size: 14px; margin-bottom: 30px;">tailored to your needs</p>

        <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 30px;">
          <li style="margin-bottom: 12px; color: #4A5568;"><span style="color: #48BB78; margin-right: 8px;">✓</span> [Everything in Tier 2]</li>
          <li style="margin-bottom: 12px; color: #4A5568;"><span style="color: #48BB78; margin-right: 8px;">✓</span> [VIP Feature 1]</li>
          <li style="margin-bottom: 12px; color: #4A5568;"><span style="color: #48BB78; margin-right: 8px;">✓</span> [VIP Feature 2]</li>
          <li style="margin-bottom: 12px; color: #4A5568;"><span style="color: #48BB78; margin-right: 8px;">✓</span> [VIP Feature 3]</li>
        </ul>

        <button style="width: 100%; background: #4299E1; color: white; padding: 14px; border: none; border-radius: 8px; cursor: pointer;">
          Contact Us
        </button>
      </div>

    </div>

  </div>
</section>
```

---

## Case Studies/Results Page Sections

### 1. Case Study Grid

**Purpose:** Showcase client results with story-driven format.

#### Template

```html
<section style="padding: 80px 20px; background: #F7FAFC;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <h1 style="text-align: center; font-size: 42px; color: #1A202C; margin-bottom: 60px;">
      Client Success Stories
    </h1>

    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px;">

      <!-- Case Study 1 -->
      <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

        <!-- Featured Image -->
        <img src="case-study-1.jpg" alt="Client 1" style="width: 100%; height: 250px; object-fit: cover;" />

        <!-- Content -->
        <div style="padding: 30px;">
          <h3 style="font-size: 24px; color: #1A202C; margin-bottom: 15px;">
            [Client Name/Company]: [Outcome Achieved]
          </h3>
          <p style="color: #4A5568; line-height: 1.7; margin-bottom: 20px;">
            [2-3 sentence summary: their challenge, your solution, specific results]
          </p>

          <!-- Metrics -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 25px;">
            <div style="text-align: center; background: #EBF8FF; padding: 15px; border-radius: 8px;">
              <p style="font-size: 28px; font-weight: bold; color: #2C5282; margin: 0;">[+X%]</p>
              <p style="font-size: 12px; color: #718096; margin: 0;">[Metric 1]</p>
            </div>
            <div style="text-align: center; background: #F0FFF4; padding: 15px; border-radius: 8px;">
              <p style="font-size: 28px; font-weight: bold; color: #276749; margin: 0;">[$XXK]</p>
              <p style="font-size: 12px; color: #718096; margin: 0;">[Metric 2]</p>
            </div>
            <div style="text-align: center; background: #FFF5F5; padding: 15px; border-radius: 8px;">
              <p style="font-size: 28px; font-weight: bold; color: #9B2C2C; margin: 0;">[X days]</p>
              <p style="font-size: 12px; color: #718096; margin: 0;">[Metric 3]</p>
            </div>
          </div>

          <button style="width: 100%; background: #4299E1; color: white; padding: 12px; border: none; border-radius: 8px; cursor: pointer;">
            Read Full Story →
          </button>
        </div>

      </div>

      <!-- Repeat for Case Studies 2-4 -->

    </div>

  </div>
</section>
```

---

## Contact Page Sections

### 1. Contact Form Section

**Purpose:** Make it frictionless to reach out with clear expectations.

#### Template

```html
<section style="padding: 80px 20px; background: white;">
  <div style="max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">

    <!-- Left: Contact Info & Details -->
    <div>
      <h1 style="font-size: 38px; color: #1A202C; margin-bottom: 20px;">
        Let's Work Together
      </h1>
      <p style="font-size: 18px; color: #4A5568; line-height: 1.7; margin-bottom: 40px;">
        [1-2 sentences about what happens after they submit: response time, next steps, what to expect]
      </p>

      <!-- Contact Methods -->
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 18px; color: #2D3748; margin-bottom: 15px;">Reach Out Directly:</h3>
        <p style="color: #4A5568; margin-bottom: 10px;">
          📧 <a href="mailto:hello@example.com" style="color: #4299E1;">hello@example.com</a>
        </p>
        <p style="color: #4A5568; margin-bottom: 10px;">
          📱 <a href="tel:+1234567890" style="color: #4299E1;">(123) 456-7890</a>
        </p>
        <p style="color: #4A5568;">
          📍 [City, State/Country OR "Virtual Services Worldwide"]
        </p>
      </div>

      <!-- Social Links -->
      <div>
        <h3 style="font-size: 18px; color: #2D3748; margin-bottom: 15px;">Follow Along:</h3>
        <div style="display: flex; gap: 15px;">
          <a href="#" style="width: 40px; height: 40px; background: #EBF8FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">🔗</a>
          <a href="#" style="width: 40px; height: 40px; background: #EBF8FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">📘</a>
          <a href="#" style="width: 40px; height: 40px; background: #EBF8FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">📷</a>
          <a href="#" style="width: 40px; height: 40px; background: #EBF8FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">🐦</a>
        </div>
      </div>
    </div>

    <!-- Right: Contact Form -->
    <div>
      <form style="background: #F7FAFC; border-radius: 12px; padding: 40px;">

        <div style="margin-bottom: 20px;">
          <label style="display: block; color: #2D3748; font-weight: 600; margin-bottom: 8px;">Name *</label>
          <input type="text" required style="width: 100%; padding: 12px; border: 1px solid #CBD5E0; border-radius: 6px; font-size: 16px;" />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; color: #2D3748; font-weight: 600; margin-bottom: 8px;">Email *</label>
          <input type="email" required style="width: 100%; padding: 12px; border: 1px solid #CBD5E0; border-radius: 6px; font-size: 16px;" />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; color: #2D3748; font-weight: 600; margin-bottom: 8px;">How can I help?</label>
          <select style="width: 100%; padding: 12px; border: 1px solid #CBD5E0; border-radius: 6px; font-size: 16px;">
            <option>Coaching/Consulting</option>
            <option>Speaking Engagement</option>
            <option>Media Interview</option>
            <option>Partnership Opportunity</option>
            <option>Other</option>
          </select>
        </div>

        <div style="margin-bottom: 25px;">
          <label style="display: block; color: #2D3748; font-weight: 600; margin-bottom: 8px;">Message *</label>
          <textarea required rows="5" style="width: 100%; padding: 12px; border: 1px solid #CBD5E0; border-radius: 6px; font-size: 16px; resize: vertical;"></textarea>
        </div>

        <button type="submit" style="width: 100%; background: #4299E1; color: white; padding: 14px; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer;">
          Send Message →
        </button>

        <p style="color: #718096; font-size: 13px; margin-top: 15px; text-align: center;">
          We typically respond within 24 hours.
        </p>

      </form>
    </div>

  </div>
</section>
```

---

## Blog/Resources Sections

### 1. Blog Post Grid

**Purpose:** Showcase recent articles with clear CTAs to read.

#### Template

```html
<section style="padding: 80px 20px; background: #F7FAFC;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <h1 style="text-align: center; font-size: 42px; color: #1A202C; margin-bottom: 50px;">
      Latest Insights
    </h1>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;">

      <!-- Blog Post 1 -->
      <article style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <img src="blog-1.jpg" alt="Blog post title" style="width: 100%; height: 200px; object-fit: cover;" />
        <div style="padding: 25px;">
          <p style="color: #718096; font-size: 13px; margin-bottom: 10px;">[Category] • [Read Time] min read</p>
          <h3 style="font-size: 20px; color: #1A202C; margin-bottom: 12px; line-height: 1.3;">
            [Compelling Blog Post Title]
          </h3>
          <p style="color: #4A5568; line-height: 1.6; margin-bottom: 20px;">
            [2-sentence excerpt or summary]
          </p>
          <a href="#" style="color: #4299E1; font-weight: 600; text-decoration: none;">
            Read More →
          </a>
        </div>
      </article>

      <!-- Repeat for Posts 2-6 -->

    </div>

    <!-- Load More / Pagination -->
    <div style="text-align: center; margin-top: 50px;">
      <button style="background: #4299E1; color: white; padding: 14px 32px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
        Load More Articles
      </button>
    </div>

  </div>
</section>
```

---

## Universal Design Principles for All Sections

### Color Palette Guidelines

**Primary Brand Colors:**
- Use brand's primary color for CTAs, links, accents
- Use brand's secondary color for highlights, badges
- Neutral grays for body text (maintain 4.5:1 contrast ratio)

**Conversion-Focused Defaults (if no brand colors):**
- Primary CTA: `#4299E1` (blue), `#48BB78` (green), or `#E53E3E` (red)
- Secondary CTA: Outlined or white background
- Background: `#FFFFFF` (white), `#F7FAFC` (light gray), `#EBF8FF` (light blue)

### Typography Standards

- **Headings:** Bold, high-contrast, clear hierarchy
  - H1: 42-52px
  - H2: 32-38px
  - H3: 22-28px
  - H4: 18-20px
- **Body:** 16-18px, line-height 1.6-1.8
- **Small text:** 13-14px (captions, disclaimers)

### Spacing & Layout

- **Section padding:** 80-120px vertical, 20px horizontal (mobile-safe)
- **Content max-width:** 1200px for full layouts, 800px for single-column content
- **Grid gaps:** 30-60px depending on content density
- **Whitespace:** Be generous—let content breathe

### Mobile Responsiveness

- All grids should collapse to single column below 768px
- Font sizes scale down 15-20% on mobile
- Buttons minimum 44px tap target
- Images responsive (max-width: 100%)

---

*Use these section templates as foundations. Customize copy, colors, and imagery to match brand guidelines while maintaining conversion-focused structure and hierarchy.*
