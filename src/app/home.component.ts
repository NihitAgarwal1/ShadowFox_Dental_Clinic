import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Trusted family dental care</span>
        <h1>Specialized care for women, children & families.</h1>
        <p>Experience compassionate, expert-led dental services in a warm, welcoming clinic built to keep every smile healthy and confident.</p>
        <div class="hero-actions">
          <a routerLink="/contact" class="button primary">Fix Appointment</a>
          <a routerLink="/treatments" class="button secondary">View Treatments</a>
        </div>
        <div class="hero-highlights">
          <div>
            <strong>10,000+</strong>
            <span>happy smiles</span>
          </div>
          <div>
            <strong>4.9 / 5</strong>
            <span>patient trust</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>years experience</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card">
          <div class="hero-card-tag">Gentle treatment</div>
          <h2>Family-first dentistry that feels relaxed.</h2>
          <p>From pediatric care to adult wellness, every visit is calm, safe, and tailored to your needs.</p>
        </div>
      </div>
    </section>

    <section class="small-info">
      <article>
        <h2>Clean. Comfortable. Caring.</h2>
        <p>Our clinic combines modern hygiene protocols with gentle service so every family member feels at ease.</p>
      </article>
      <a routerLink="/about" class="link-button">Meet Our Team</a>
    </section>

    <section class="features-section">
      <div class="section-head">
        <span>Why choose us</span>
        <h2>Care that feels like family.</h2>
        <p>Everything we do is designed around your comfort, safety, and confidence.</p>
      </div>
      <div class="feature-grid">
        <article>
          <strong>All-in-One Care</strong>
          <p>Comprehensive services from cleaning to orthodontics, all under one roof.</p>
        </article>
        <article>
          <strong>Experienced Doctors</strong>
          <p>Led by skilled practitioners who treat every patient with warmth and expertise.</p>
        </article>
        <article>
          <strong>Patient-Centric</strong>
          <p>Personalized treatment plans built for your family’s unique needs.</p>
        </article>
        <article>
          <strong>Modern Equipment</strong>
          <p>Latest dental tools and hygiene protocols for precise, pain-free care.</p>
        </article>
      </div>
    </section>

    <section class="services-preview">
      <div class="section-head">
        <span>Our Services</span>
        <h2>Explore the treatments we provide.</h2>
      </div>
      <div class="service-grid">
        <article>
          <h3>Teeth Cleaning</h3>
          <p>Professional scaling for fresher, healthier gums.</p>
        </article>
        <article>
          <h3>Tooth Filling</h3>
          <p>Natural-looking fillings that restore function comfortably.</p>
        </article>
        <article>
          <h3>Extraction</h3>
          <p>Safe, gentle removal to protect your long-term oral health.</p>
        </article>
        <article>
          <h3>Bleaching</h3>
          <p>Brighten your smile with clinic-grade whitening.</p>
        </article>
        <article>
          <h3>Orthodontics</h3>
          <p>Straightening solutions for children and adults.</p>
        </article>
        <article>
          <h3>Dentures</h3>
          <p>Comfortable, natural replacements for missing teeth.</p>
        </article>
      </div>
      <div class="section-actions">
        <a routerLink="/treatments" class="button secondary">View all treatments</a>
      </div>
    </section>

    <section class="testimonials">
      <div class="section-head">
        <span>Testimonials</span>
        <h2>Loved by our families.</h2>
      </div>
      <div class="testimonial-grid">
        <article>
          <p>“The doctors are extremely kind and attentive. My daughter actually looks forward to her visits!”</p>
          <footer>
            <strong>Lakshmi R.</strong>
            <span>★★★★★</span>
          </footer>
        </article>
        <article>
          <p>“Painless treatment and a calming clinic. Dr. Anupriya explained every step.”</p>
          <footer>
            <strong>Priya S.</strong>
            <span>★★★★★</span>
          </footer>
        </article>
        <article>
          <p>“From the staff to the hygiene, everything is top notch. Highly recommend for families.”</p>
          <footer>
            <strong>Anitha M.</strong>
            <span>★★★★★</span>
          </footer>
        </article>
      </div>
    </section>
  `
})
export class HomeComponent {}
