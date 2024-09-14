import { armhsImg, hssImage, dhsImage } from '../images';

export const navigation = [
    { name: 'Home', to: '/', current: true },
    { name: 'Services', to: '/services', current: false },
    { name: 'Success Stories', current: false, to: '/#successStories' },
    { name: 'Referral', to: '/referral', current: false },
    { name: 'Team', to: '/team', current: false },
    { name: 'Contact', to: '/contact', current: false },
  ]

export const employees = [
    { name: 'Ismail Ali', role: 'Director', location: 'Greater Minneapolis/St. Paul', img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' },
    { name: 'Hamza Ali', role: 'Program Manager', location: 'Greater Minneapolis/St. Paul', img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' },
    { name: 'Obsa Ali', role: 'Program Manager', location: 'Greater Minneapolis/St. Paul', img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' },
    { name: 'Zahra Abdullahi', role: 'Outreach Coordinator', location: 'Greater Minneapolis/St. Paul', img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' },
  ];

export  const testimonials = [
    { quote: '“Thanks to Allied Health Services, I found a safe place to live and received the support I needed to get back on my feet.”', client: 'Anonymous Client', location: 'Brooklyn Center, MN', img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' },
    { quote: '“The financial assistance they were able to find me was a lifesaver for my family.”', client: 'Anonymous Client', location: 'St. Paul, MN', img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' },
    { quote: '“Their team helped me navigate the complex housing system and avoid eviction.”', client: 'Anonymous Client', location: 'Burnsville, MN', img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' },
  ];

export const services = [
    {
      name: 'Housing Stabilization Services',
      description: 'Find and keep housing',
      imageSrc: hssImage,
      imageAlt: 'Hand handing over a pair of keys',
      href: '/services',
    },
    {
      name: 'Adult Rehabilitation Mental Health Services',
      description: 'coming soon',
      imageSrc: armhsImg,
      imageAlt: 'Therapist sitting and listening to a patient',
      href: '/',
    },
    {
      name: '245D Services',
      description: 'coming soon',
      imageSrc: dhsImage,
      imageAlt: 'Case Manager providing in home care to elderly client',
      href: '/',
    },
  ]

export const hssServiceTypes = [
    { name: 'Eligibility', value: 'Qualified recipients must be receiving Medical Assistance(MA)/Have Private Insurance, be 18 years or older and have disabilities or are seniors (65 and older) who require assistance to find and/or keep housing.' },
    { name: 'Housing Consultation', value: 'People who do not have waiver or targeted case management or a MSHO/MSC+ care coordinator, but need Housing Stabilization Services, can complete the person-centered planning needed through an enrolled housing consultant.' },
    { name: 'Housing Transitioning', value: 'Services that assist a person to plan for, find, and move to a home in the community.' },
    { name: 'Housing Sustaining', value: 'Services that supports a person to maintain living in their home in the community.' },
  ]

export const values = [
    { name: 'Empathy', description: 'We approach every situation with deep understanding and compassion for the experiences and emotions of others.' },
    { name: 'Integrity', description: 'We uphold the highest standards of honesty, transparency, and ethical practice in all our interactions.' },
    { name: 'Advocacy', description: 'We champion the rights and needs of individuals and communities, striving to create a more just and equitable society.' },
    { name: 'Collaboration', description: 'We believe in the power of partnerships and teamwork to achieve the best outcomes for those we serve.' },
    { name: 'Respect', description: 'We honor the dignity, worth, and unique perspectives of every individual, fostering an inclusive and supportive environment.' },
    { name: 'Empowerment', description: 'We are dedicated to helping others realize their potential, encouraging self-sufficiency and personal growth.' },
  ]

 export const referrerType = [
    { id: 1, type: 'Case Manager' },
    { id: 2, type: 'Physician' },
    { id: 3, type: 'Self' },
    { id: 4, type: 'Other' },
  ];

export const insuranceTypes = [
    { id: 1, type: 'Medical Assistance' },
    { id: 2, type: 'UCare' },
    { id: 3, type: 'Blue Cross Blue Shield' },
    { id: 4, type: 'Health Partners' },
    { id: 5, type: 'Hennepin Health' },
    { id: 6, type: 'Medica' },
    { id: 7, type: 'Other' },
  ];

export const waiverTypes = [
    { id: 1, type: 'Community Alternative Care Waiver (CAC)' },
    { id: 2, type: 'Community Access for Disability Inclusion Waiver (CADI)' },
    { id: 3, type: 'Developmental Disabilities Waiver (DD)' },
    { id: 4, type: 'Brain Injury Waiver (BI)' },
    { id: 5, type: 'Elderly Waiver (EW)' },
    { id: 6, type: 'Alternative Care Waiver (AC)' },
    { id: 7, type: 'Other' },
  ];
