// URL dan anon key Supabase
const SUPABASE_URL = 'https://cchpejgruuxduhhcpdfl.supabase.co';  // URL Supabase Anda
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjaHBlamdydXV4ZHVoaGNwZGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4Mjc3NjgsImV4cCI6MjA1MDQwMzc2OH0.HN_AwuN48jmzZBqp8YdiGJO1RCel9VpxG9K6zDQUTBI';  // API Key Supabase Anda

// Inisialisasi Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Ambil elemen form login
const loginForm = document.getElementById('loginForm');

// Tangani submit form login
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Mencegah form dari reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Melakukan autentikasi dengan Supabase menggunakan username dan password
    const { data, error } = await supabase.auth.signInWithPassword({
        email: username,  // Ganti email dengan username
        password: password
    });

    if (error) {
        // Menampilkan notifikasi error jika login gagal
        alert('Login gagal: ' + error.message);
    } else {
        // Menyimpan data pengguna untuk penggunaan lebih lanjut
        localStorage.setItem('user', JSON.stringify(data.user));

        alert('Login berhasil! Selamat datang ' + data.user.email);
        // Redirect ke halaman setelah login sukses
        window.location.href = '/dashboard.html';  // Ganti dengan URL dashboard kamu
    }
});
