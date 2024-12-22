// URL dan anon key Supabase
const SUPABASE_URL = 'https://your-project-ref.supabase.co';  // Ganti dengan URL Supabase Anda
const SUPABASE_ANON_KEY = 'your-anon-key';  // Ganti dengan anon key Supabase Anda

// Inisialisasi Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Ambil elemen form login
const loginForm = document.getElementById('loginForm');

// Tangani submit form login
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Mencegah form dari reload

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Melakukan autentikasi dengan Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert('Login gagal: ' + error.message);
    } else {
        alert('Login berhasil! Selamat datang ' + data.user.email);
        // Redirect ke halaman setelah login sukses
        window.location.href = '/dashboard.html';  // Ganti dengan URL dashboard kamu
    }
});
