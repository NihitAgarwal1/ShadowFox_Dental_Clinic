import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Treatment = {
  name: string;
  details: string[];
  expanded: boolean;
};

@Component({
  standalone: true,
  selector: 'app-treatments',
  imports: [CommonModule],
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent {
  treatments: Treatment[] = [
    {
      name: 'Teeth Cleaning & Scaling',
      details: [
        'Advanced non-surgical gum care to remove plaque and tartar buildup.',
        'Helpful for early gum disease and as preparation before deeper treatments.',
        'Supports cleaner gums, fresher breath, and better long-term oral health.'
      ],
      expanded: false
    },
    {
      name: 'Tooth Filling',
      details: [
        'Repairs teeth damaged by cavities, trauma, wear, or nail-biting.',
        'Uses high-quality materials to seal gaps and prevent future decay.',
        'Preserves natural tooth structure while improving function and appearance.'
      ],
      expanded: false
    },
    {
      name: 'Tooth Extraction',
      details: [
        'Gentle removal when a tooth is beyond repair or causing oral health problems.',
        'Every option is evaluated before recommending extraction.',
        'Careful techniques and follow-up support make recovery smoother.'
      ],
      expanded: false
    },
    {
      name: 'Artificial Complete Denture',
      details: [
        'Complete dentures restore function and aesthetics for missing teeth.',
        'Customized for a natural look, comfortable fit, and better daily use.',
        'Useful for replacing several teeth or a full arch.'
      ],
      expanded: false
    },
    {
      name: 'Dental Implants',
      details: [
        'Modern solution for replacing missing teeth with stable artificial roots.',
        'Biocompatible materials like titanium support long-lasting prosthetic teeth.',
        'Restores chewing strength, smile appearance, and confidence.'
      ],
      expanded: false
    },
    {
      name: 'Laser Dentistry',
      details: [
        'Advanced laser technology supports precise, minimally invasive treatment.',
        'Used for soft tissue care, gum procedures, and corrective dental treatments.',
        'Offers faster healing, reduced discomfort, and improved accuracy.'
      ],
      expanded: false
    },
    {
      name: 'Root Canal Therapy',
      details: [
        'Treats deep tooth infections that reach the pulp.',
        'Removes infected tissue, cleans the tooth, and seals it to prevent future issues.',
        'Relieves pain while preserving natural tooth structure whenever possible.'
      ],
      expanded: false
    },
    {
      name: 'Wisdom Tooth Extraction',
      details: [
        'Recommended when wisdom teeth are impacted, infected, painful, or damaging nearby teeth.',
        'Gentle removal with modern techniques and anesthesia options.',
        'Includes post-operative guidance for smooth recovery.'
      ],
      expanded: false
    },
    {
      name: 'Fixed Partial Denture (Bridge)',
      details: [
        'Replaces missing teeth by anchoring prosthetic teeth to nearby teeth or implants.',
        'Custom-made bridges restore smile appearance and chewing function.',
        'Helps maintain oral stability and prevents shifting of adjacent teeth.'
      ],
      expanded: false
    },
    {
      name: 'Teeth Whitening (Bleaching)',
      details: [
        'Professional whitening helps lighten external and internal stains.',
        'Safe bleaching agents brighten teeth by several shades.',
        'Useful for discoloration from food, beverages, age, and lifestyle habits.'
      ],
      expanded: false
    },
    {
      name: 'Veneers',
      details: [
        'Thin custom-made shells cover chips, gaps, and discoloration.',
        'Improves the shape, shade, and overall appearance of teeth.',
        'Creates a polished, natural-looking smile.'
      ],
      expanded: false
    },
    {
      name: 'Pediatric Dentistry',
      details: [
        'Gentle dental care for children in a friendly and comfortable setting.',
        'Covers routine check-ups, preventive treatments, and early dental guidance.',
        'Builds healthy dental habits for long-term oral wellness.'
      ],
      expanded: false
    },
    {
      name: 'Flap Surgery',
      details: [
        'Advanced gum treatment for deep-seated plaque, bacteria, and periodontal disease.',
        'Gum tissue is carefully lifted, cleaned, and repositioned for healing.',
        'Helps prevent further gum problems and supports gum health.'
      ],
      expanded: false
    },
    {
      name: 'Orthodontic Braces',
      details: [
        'Corrects misaligned teeth and improves bite function.',
        'Options may include metal, ceramic, or lingual braces.',
        'Designed to create a confident, harmonious, and healthier smile.'
      ],
      expanded: false
    },
    {
      name: 'Clear Aligners',
      details: [
        'Discreet alternative to traditional braces.',
        'Transparent removable trays gradually shift teeth into alignment.',
        'Comfortable, flexible, and convenient for everyday orthodontic care.'
      ],
      expanded: false
    }
  ];

  toggleTreatment(treatment: Treatment) {
    treatment.expanded = !treatment.expanded;
  }
}
