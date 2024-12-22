// URL dan anon key Supabase
const SUPABASE_URL = 'https://cchpejgruuxduhhcpdfl.supabase.co';  // Ganti dengan URL Supabase Anda
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjaHBlamdydXV4ZHVoaGNwZGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4Mjc3NjgsImV4cCI6MjA1MDQwMzc2OH0.HN_AwuN48jmzZBqp8YdiGJO1RCel9VpxG9K6zDQUTBI';  // Ganti dengan API Key Supabase Anda

// Inisialisasi Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Ambil elemen form login
const loginForm = document.getElementById('loginForm');

// Tangani submit form login
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Mencegah form dari reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mencari pengguna berdasarkan username
    const { data: user, error: userError } = await supabase
        .from('users')  // Nama tabel users
        .select('id, username, password, role')  // Ambil kolom yang diperlukan
        .eq('username', username)  // Cocokkan dengan username yang dimasukkan
        .single();  // Ambil satu data jika ditemukan

    if (userError || !user) {
        // Menampilkan pesan kesalahan jika username tidak ditemukan
        alert('Username tidak ditemukan.');
        return;
    }

    // Cek apakah password yang dimasukkan sesuai dengan password yang ada di database
    if (password !== user.password) {
        // Menampilkan pesan kesalahan jika password salah
        alert('Password salah.');
        return;
    }

    // Jika login berhasil, simpan informasi pengguna dan role
    localStorage.setItem('user', JSON.stringify(user));

    // Menampilkan pesan login berhasil
    alert('Login berhasil! Selamat datang ' + user.username);

    // Redirect ke halaman dashboard
    window.location.href = '/dashboard.html';  // Ganti dengan URL dashboard kamu
});
