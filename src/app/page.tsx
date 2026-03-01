"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Target, DollarSign, Users, Star, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="blurBottom"
      cardStyle="layered-gradient"
      primaryButtonStyle="inset-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Elite Coaching"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Pricing", id: "pricing" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{
            text: "Start Training",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Transform Your Body, Elevate Your Life"
          description="Expert personal coaching designed to help you achieve your fitness goals. Whether you're starting your journey or reaching peak performance, our certified coaches are here to guide every step."
          tag="Professional Sports Coaching"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          imageSrc="http://img.b2bpic.net/free-photo/woman-gym-with-coach_1303-5545.jpg"
          imageAlt="Professional athlete training with a coach"
          buttons={[
            { text: "Book Your First Session", href: "#contact" },
            { text: "View Services", href: "#services" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Elite Coaching"
          description={[
            "We're a team of certified sports coaches with over 15 years of combined experience in personal training, strength conditioning, and athletic performance. Our mission is to empower individuals to achieve their full potential through personalized coaching and scientific training methods.",            "Every client receives a customized training program tailored to their unique goals, fitness level, and lifestyle. We believe in sustainable results through proper technique, progressive overload, and consistent motivation.",            "Our holistic approach includes nutrition guidance, recovery strategies, and mental conditioning to ensure you succeed both in and out of the gym."
          ]}
          buttons={[
            { text: "Meet Our Team", href: "#team" }
          ]}
          showBorder={false}
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Coaching Services"
          description="Specialized training programs designed to meet your unique fitness goals and needs"
          tag="What We Offer"
          tagIcon={Target}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Strength & Conditioning",              description: "Build muscle, increase power, and develop functional strength with scientifically-designed workout programs. Our coaches guide you through proper form and progressive training techniques.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/crossfit-athlete-doing-exercise-with-barbell_58466-11089.jpg", imageAlt: "strength training workout fitness athlete" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/crossfit-athlete-doing-exercise-with-barbell_58466-11089.jpg", imageAlt: "strength training workout fitness athlete" }
            },
            {
              id: 2,
              title: "Cardio & Endurance",              description: "Improve your cardiovascular health and athletic stamina with customized cardio programs. From HIIT training to long-distance conditioning, we optimize your endurance performance.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/women-running-treadmill_1262-419.jpg", imageAlt: "cardio training running fitness health" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/women-running-treadmill_1262-419.jpg", imageAlt: "cardio training running fitness health" }
            },
            {
              id: 3,
              title: "Nutrition Coaching",              description: "Fuel your body right with personalized meal plans and nutrition guidance. Our coaches help you make sustainable dietary choices that support your training and goals.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/healthy-menu-recipe-food-diet_53876-122837.jpg", imageAlt: "nutrition meal plan healthy eating diet" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/healthy-menu-recipe-food-diet_53876-122837.jpg", imageAlt: "nutrition meal plan healthy eating diet" }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Training Plans"
          description="Choose the coaching package that fits your goals and lifestyle"
          tag="Flexible Pricing"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          plans={[
            {
              id: "starter",              title: "Starter",              price: "$99",              period: "/month",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sports-couple-is-engaged-gym_1157-21910.jpg",              imageAlt: "Starter coaching plan",              button: { text: "Get Started", href: "#contact" },
              features: [
                "2 coaching sessions per week",                "Personalized workout program",                "Monthly progress check-in",                "Email support"
              ]
            },
            {
              id: "professional",              title: "Professional",              price: "$199",              period: "/month",              imageSrc: "http://img.b2bpic.net/free-photo/two-internationals-friends-is-engaged-gym_1157-32155.jpg",              imageAlt: "Professional coaching plan",              button: { text: "Choose Plan", href: "#contact" },
              features: [
                "4 coaching sessions per week",                "Customized nutrition plan",                "Bi-weekly progress assessments",                "Priority email & phone support",                "Access to training app"
              ]
            },
            {
              id: "elite",              title: "Elite",              price: "$349",              period: "/month",              imageSrc: "http://img.b2bpic.net/free-photo/two-internationals-friends-is-engaged-gym_1157-32155.jpg",              imageAlt: "Elite coaching plan",              button: { text: "Choose Plan", href: "#contact" },
              features: [
                "Unlimited coaching sessions",                "Complete nutrition & recovery plan",                "Weekly progress assessments",                "24/7 dedicated coach support",                "Full training app access",                "Quarterly performance evaluation"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Expert Coaches"
          description="Certified professionals dedicated to your success"
          tag="Our Team"
          tagIcon={Users}
          tagAnimation="slide-up"
          members={[
            {
              id: "1",              name: "Marcus Johnson",              role: "Head Coach & Founder",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-male-boxer-posing-t-shirt-with-arms-crossed_23-2148426242.jpg",              imageAlt: "male coach portrait fitness professional trainer"
            },
            {
              id: "2",              name: "Sarah Mitchell",              role: "Strength & Conditioning Specialist",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-620.jpg",              imageAlt: "female coach portrait fitness professional trainer"
            },
            {
              id: "3",              name: "David Chen",              role: "Endurance Coach",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-male-boxer-posing-t-shirt-with-arms-crossed_23-2148426242.jpg",              imageAlt: "male coach portrait fitness professional trainer"
            },
            {
              id: "4",              name: "Emily Rodriguez",              role: "Nutrition & Wellness Coach",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-620.jpg",              imageAlt: "female coach portrait fitness professional trainer"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Clients Say"
          description="Real results from people who transformed their lives with our coaching"
          tag="Success Stories"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "James Wilson",              role: "Athlete",              company: "Fitness Enthusiast",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-business-woman-pointing-camera-smiling_1098-20747.jpg",              imageAlt: "athlete portrait happy client fit person professional"
            },
            {
              id: "2",              name: "Amanda Foster",              role: "Professional",              company: "Marketing Executive",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-athletic-man-black-background_613910-9870.jpg",              imageAlt: "athlete portrait successful client fit person professional"
            },
            {
              id: "3",              name: "Michael Torres",              role: "Entrepreneur",              company: "Tech Startup Founder",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-620.jpg",              imageAlt: "athlete portrait trained client fit person professional"
            },
            {
              id: "4",              name: "Jessica Lee",              role: "Athlete",              company: "Competitive Runner",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-620.jpg",              imageAlt: "athlete portrait transformed client fit person professional"
            }
          ]}
          kpiItems={[
            { value: "500+", label: "Clients Transformed" },
            { value: "95%", label: "Success Rate" },
            { value: "10+", label: "Years Experience" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Ready to Start Your Transformation?"
          description="Take the first step toward your fitness goals. Our coaches are ready to create a personalized plan tailored to your needs. Schedule your free consultation today."
          buttons={[
            { text: "Book Consultation", href: "https://calendly.com/elite-coaching" },
            { text: "Contact Us", href: "mailto:hello@elitecoaching.com" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Elite Coaching"
          columns={[
            {
              items: [
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" }
              ]
            },
            {
              items: [
                { label: "Pricing", href: "#pricing" },
                { label: "Team", href: "#team" },
                { label: "Testimonials", href: "#testimonials" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}