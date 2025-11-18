export default async function handler(req, res) {

  // 🔥 اینجا لینک‌های سرودها رو از Supabase قرار می‌دی
  const playlist = [
    "https://YOUR_SUPABASE_BUCKET/song1.mp3",
    "https://YOUR_SUPABASE_BUCKET/song2.mp3",
    "https://YOUR_SUPABASE_BUCKET/song3.mp3"
  ];

  // انتخاب یک سرود رندوم
  const randomSong = playlist[Math.floor(Math.random() * playlist.length)];

  // دریافت فایل
  const response = await fetch(randomSong);

  // تبدیل باینری
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // هدرهای لازم برای پخش
  res.setHeader("Content-Type", "audio/mpeg");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // ارسال به پلیر
  res.send(buffer);
}
