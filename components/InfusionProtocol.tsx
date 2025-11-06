"use client";

interface InfusionProtocolProps {
  ingredientCount: number;
}

export default function InfusionProtocol({ ingredientCount }: InfusionProtocolProps) {
  const totalBaseVolume = 30 + 20 + 25; // মরিঙ্গা, ক্যাস্টর, নারিকেল তেল
  const infusionMinutes = Math.min(ingredientCount * 9, 90);

  return (
    <div className="rounded-3xl border border-forest-200/80 bg-white/90 p-6 shadow-md shadow-forest-900/5 backdrop-blur">
      <h3 className="font-display text-xl text-forest-800">তৈরি করার দ্রুত সূত্র</h3>
      <ul className="mt-4 space-y-3 text-sm text-forest-700">
        <li>
          <strong>মোট বেস তেল:</strong> প্রায় {totalBaseVolume} মি.লি. (মরিঙ্গা ৩০ + ক্যাস্টর ২০ + নারিকেল ২৫)
        </li>
        <li>
          <strong>ইনফিউশন সময়:</strong> {infusionMinutes} মিনিট ডাবল বয়লার + ৬ ঘণ্টা সোলার রেস্ট
        </li>
        <li>
          <strong>হার্ব ম্যাকেরেশন:</strong> শুকনো হার্বের জন্য ১:২ (হার্ব:তেল) রেশিও রাখুন, কালোজিরা ও মেথির জন্য হালকা ভেজে নিন।
        </li>
        <li>
          <strong>বুস্টার যোগ:</strong> তেল ঠান্ডা হলে রোজমেরি ১০ ফোঁটা + টি ট্রি ৮ ফোঁটা + ভিটামিন ই ২ ক্যাপসুল মিশিয়ে নিন।
        </li>
        <li>
          <strong>ব্যবহার পদ্ধতি:</strong> প্রতি প্রয়োগে ৫ মি.লি. স্ক্যাল্পে ম্যাসাজ, সপ্তাহে ২-৩ বার।
        </li>
      </ul>
    </div>
  );
}
