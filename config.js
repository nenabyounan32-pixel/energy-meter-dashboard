// ============================================================
// Energy Meter Configuration
// ============================================================
// 
// This file configures how to connect to your remote ESP device.
// Change these values based on your setup!

const CONFIG = {
    // ============================================================
    // 1. CHANGE THIS TO YOUR REMOTE ESP ADDRESS
    // ============================================================
    // 
    // Choose ONE based on your remote access method:
    //
    // For CLOUDFLARE TUNNEL:
    // ESP_URL: 'https://energy-meter.yourdomain.com'
    //
    // For PORT FORWARDING:
    // ESP_URL: 'http://YOUR.PUBLIC.IP:8080'
    //
    // For ngrok:
    // ESP_URL: 'https://your-domain.ngrok.io'
    //
    // For LOCAL TESTING (remove after testing!):
    // ESP_URL: 'http://192.168.1.100'
    //
    
    ESP_URL: 'http://10.38.247.172',  // ← CHANGE THIS TO YOUR ESP ADDRESS!

    // ============================================================
    // 2. CHANGE THIS TO YOUR API KEY
    // ============================================================
    // This must match the api_key in your ESP code:
    //   const char* api_key = "your-secret-api-key-12345";
    //
    // Examples of good API keys:
    // - 'my-energy-meter-key-abc123xyz'
    // - 'esp-secure-key-2024'
    // - Use a mix of letters, numbers, and hyphens for security
    //
    
    API_KEY: 'your-secret-api-key-12345',

    // ============================================================
    // 3. OPTIONAL: HTTP BASIC AUTH (if using instead of API_KEY)
    // ============================================================
    // You can use EITHER API_KEY OR BASIC_AUTH (set the other to null)
    //
    // If using HTTP Basic Auth:
    // 1. Set API_KEY to null
    // 2. Fill in username and password
    // 3. These must match your ESP settings:
    //    const char* admin_user = "admin";
    //    const char* admin_pass = "admin123";
    //
    // Note: API_KEY is MORE SECURE for remote access!
    //
    
    BASIC_AUTH: null  // Set to { username: 'admin', password: 'admin123' } to use instead of API_KEY
};

// ============================================================
// QUICK SETUP CHECKLIST
// ============================================================
//
// Before deploying:
// 
// [ ] Update ESP_URL with your remote address
// [ ] Update API_KEY to match ESP's api_key
// [ ] If using basic auth, set BASIC_AUTH with credentials
// [ ] Test locally first before going remote
// [ ] Never commit passwords/keys to public GitHub repos!
//
// ============================================================
// SECURITY TIPS
// ============================================================
//
// 1. Use HTTPS when possible (Cloudflare Tunnel provides this)
// 2. Change API_KEY from default value
// 3. Change admin_pass in ESP code
// 4. Don't share this file publicly
// 5. Use strong, unique passwords
// 6. Keep your WiFi network secure
//
// ============================================================
// TROUBLESHOOTING
// ============================================================
//
// If you see "401 Unauthorized":
// - Check that API_KEY matches exactly the one in ESP code
// - Check for extra spaces or typos
//
// If you see "CORS error":
// - Make sure your ESP has CORS enabled (check energy-meter.ino)
// - Verify the ESP_URL doesn't have trailing slash
//
// If you see "Connection refused":
// - Check that ESP is online and connected to WiFi
// - Verify your remote access tunnel is running
// - Check firewall/router settings
//
// ============================================================
