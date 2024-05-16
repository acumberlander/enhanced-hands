import { ExtraInfo } from '@/components/ExtraInfo/ExtraInfo';
import { StaticImageData } from "next/image";
import picRecreation from '@/images/picRecreation.jpeg';
import shortFreestyleSet from '@/images/short_freestyle_set.jpeg';
import medFreestyleSet from '@/images/med_freestyle_set.jpeg';
import longFreestyleSet from '@/images/long_freestyle_set.jpeg';
import xlFreestyleSet from '@/images/xl_freestyle_set.jpeg';
import xxlFreestyleSet from '@/images/xxl_freestyle_set.jpeg';
import shortSetAcrylicToe from '@/images/short_set_and_acrylic_toe.jpeg';
import gelToe from '@/images/gel_toe.jpeg';
import fillIn from '@/images/fill_in.jpeg';
import acrylicToes from '@/images/acrylic_toes.jpeg';
import shortFullSet from '@/images/short_full_set.jpeg';
import medFullSet from '@/images/med_full_set.jpeg';
import longFullSet from '@/images/long_full_set.jpeg';
import acrylicOverlay from '@/images/acrylic_overlay.jpeg';

export type serviceOption = {
  id: number
  title: string;
  time: string;
  price: number;
  image?: StaticImageData;
  description?: string;
  extraInfo?: string;
}

export const serviceOptions: serviceOption[] = [
  {
    id: 1,
    title: 'Medium Junk Nail Free$tyle',
    time: '2 hours 15 minutes',
    price: 165,
  },
  {
    id: 2,
    title: 'Short Junk Nail Free$tyle',
    time: '2 hours 45 minutes',
    price: 180,
  },
  {
    id: 3,
    title: 'Russian Mani',
    time: '1 hour 30 minutes ',
    price: 70,
  },
  {
    id: 4,
    title: 'Medium Full Set + Acrylic Toes',
    time: '3 hours',
    price: 165,
    description: 'This experience includes a medium length full set and an acrylic overlay on your toes with your choice of a simple design (limit 2 fingers). For any intricate nail art/charms please add on “Detailed Nail Art” French design is qualified “Detailed” so please book accordingly.' 
  },
  {
    id: 5,
    title: '2XL Full Set',
    time: '1 hour 30 minutes',
    price: 130,
  },
  {
    id: 6,
    title: 'Picture Recreation',
    time: '2 hours 30 minutes',
    price: 120,
    image: picRecreation,
    description: 'Fell in love with a set you saw while scrolling on social media ? This experience requires a reference picture! Length can be adjusted upon request but if so please specify. Prices may increase depending amount of charms or rhinestones being used.',
  },
  {
    id: 7,
    title: 'Short Free$tyle Set',
    time: '2 hours 25 minutes',
    price: 140,
    image: shortFreestyleSet,
    description: 'LETS SPICE THINGS UP A BIT ❤️‍🔥 YOU’RE GRANTING ME FULL CREATIVE CONTROL !!! THIS CAN INCLUDE 3D ENCAPSULATION ARTWORK STICKERS BLING AND MORE',
  },
  {
    id: 8,
    title: 'Medium Free$tyle Set',
    time: '3 hours',
    price: 150,
    image: medFreestyleSet,
    description: 'LETS SPICE THINGS UP A BIT ❤️‍🔥 YOU’RE GRANTING ME FULL CREATIVE CONTROL !!! THIS CAN INCLUDE 3D ENCAPSULATION ARTWORK STICKERS BLING AND MORE'
  },
  {
    id: 9,
    title: 'Long Free$tyle Set',
    time: '3 hours',
    price: 180,
    image: longFreestyleSet,
    description: 'LETS SPICE THINGS UP A BIT ❤️‍🔥 YOU’RE GRANTING ME FULL CREATIVE CONTROL !!! THIS CAN INCLUDE 3D ENCAPSULATION ARTWORK STICKERS BLING AND MORE'
  },
  {
    id: 10,
    title: 'XL Free$tyle Set',
    time: '3 hours 20 minutes',
    price: 210,
    image: xlFreestyleSet,
    description: 'LETS SPICE THINGS UP A BIT ❤️‍🔥 YOU’RE GRANTING ME FULL CREATIVE CONTROL !!! THIS CAN INCLUDE 3D ENCAPSULATION ARTWORK STICKERS BLING AND MORE'
  },
  {
    id: 11,
    title: 'XXL Free$tyle Set',
    time: '3 hours 20 minutes',
    price: 240,
    image: xxlFreestyleSet
  },
  {
    id: 12,
    title: 'Short set + Acrylic Toe Overlay',
    time: '2 hours 40 minutes',
    price: 145,
    image: shortSetAcrylicToe,
    description: 'This experience includes a short set and an acrylic overlay on your toes with your choice of a simple design (limit 2 fingers). For any intricate nail art/charms please add on “Detailed Nail Art” French design is qualified “Detailed” so please book accordingly.'
  },
  {
    id: 13,
    title: 'Gel Toes',
    time: '35 minutes ',
    price: 30,
    image: gelToe
  },
  {
    id: 14,
    title: 'Fill in',
    time: '1 hour 30 minutes',
    price: 65,
    image: fillIn,
    description: 'Fill in ONLY. A fill in is done within week 2 or 3, not a month! Your set has to be filled in with the exact acrylic used during your previous appointment. Note that this is a starting price but can increase do to choice of designs, charms, and rhinestones etc. This does not include damaged/missing nail replacement but you can add it on as a ‘nail repair’ to your service.'
  },
  {
    id: 15,
    title: 'Acrylic Toes',
    time: '1 hour 10 minutes',
    price: 70,
    image: acrylicToes,
    description: `This is an acrylic overlay over the natural nail, no tips are added! 🚫 This service does include a dry pedi!
Detailed designs, charms, and rhinestones can result in a up charge.`
  },
  {
    id: 16,
    title: 'Mani Experience',
    time: '35 minutes',
    price: 40,
  },
  {
    id: 17,
    title: 'Short Full Set',
    time: '1 hour 30 minutes',
    price: 65,
    image: shortFullSet
  },
  {
    id: 18,
    title: 'Medium Full Set',
    time: '2 hours',
    price: 80,
    image: medFullSet
  },
  {
    id: 19,
    title: 'Long Full Set',
    time: '2 hours',
    price: 90,
    image: longFullSet,
    description: 'This experience includes a full acrylic set with one solid color ONLY! Any designs are charged separately, prices may vary. Please be mindful that time is everything for me so if you’d like Nail art please add on and specify before booking <3'
  },
  {
    id: 20,
    title: 'XL Full Set',
    time: '2 hours 20 minutes',
    price: 110,
    description: 'This experience includes a full acrylic set with one solid color ONLY! Any designs are charged separately, prices may vary. Please be mindful that time is everything for me so if you’d like Nail art please add on and specify before booking <3'
  },
  {
    id: 21,
    title: 'Nail Repair 🔧',
    time: '30 minutes',
    price: 5,
  },
  {
    id: 22,
    title: 'Acrylic Overlay',
    time: '1 hour 30 minutes ',
    price: 80,
    image: acrylicOverlay,
    description: 'This experience includes a acrylic enhancement over the natural nail, NO TIPS ADDED* simple design included. Any detailed designs/charms are charged separately!'
  },
  {
    id: 23,
    title: 'Acrylic Toe Fill',
    time: '30 minutes',
    price: 60,
  },
  {
    id: 24,
    title: 'House call 💅🏾💓📲',
    time: '3 hours 20 minutes',
    price: 150,
    description: `Let me cater to youuu! 🥰💅🏾
This service is an add on! This is for my ladies/gentlemen that want to be pampered in the comfort of their home.`
  },
  {
    id: 25,
    title: '1on1 Ultimate Nail Training 2 Day Course',
    extraInfo: 'Class is in Session 💅🏾📝' ,
    time: '4 hours 30 minutes',
    price: 675,
    description: `READ FULL DESCRIPTION ⭐️ 
    Just started doing nails?Started but got discouraged?
    Been awhile and you need a refresher course?
    This training course is just what you need babe! 3 years in the game and 2 years in actual business! Come see how I got so successful in such a little time frame. ❤️‍🔥 YOU’RE UP NEXT! INVEST IN TO YOUR FUTURE, THE TIME IS NOW! This is a 2 day nail bootcamp so book accordingly nail babes! ❤️ MUST BE DEPOSIT($195) READY!`
  },
]