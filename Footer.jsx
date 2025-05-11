// import React from "react";

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <p>&copy; {new Date().getFullYear()} E-Commerce Store. All Rights Reserved.</p>
//       <nav style={styles.nav}>
//         <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
//         <a href="/terms" style={styles.link}>Terms of Service</a>
//         <a href="/contact" style={styles.link}>Contact Us</a>
//       </nav>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: "#333",
//     color: "#fff",
//     padding: "20px",
//     textAlign: "center",
//   },
//   nav: {
//     marginTop: "10px",
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//     margin: "0 10px",
//   },
// };

// export default Footer;



import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} E-Commerce Store. All Rights Reserved.</p>
      <div style={styles.socialMedia}>
        <a href="https://www.instagram.com/vishesh_013_" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <i className="fab fa-instagram" style={styles.icon}></i> Instagram
        </a>
        <a href="https://www.facebook.com/Vishesh Unadkat" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <i className="fab fa-facebook" style={styles.icon}></i> Facebook
        </a>
        <a href="https://t.me/your_telegram_id" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <i className="fab fa-telegram" style={styles.icon}></i> Telegram
        </a>
      </div>
    </footer>
  );
};

const styles = {
// footer: {
//     backgroundColor: "#333",
//     background: "linear-gradient(135deg, #444, #222)",
//     color: "#f9f9f9",
//     padding: "30px",
//     textAlign: "center",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//     borderTop: "2px solid #555",
//     borderRadius: "10px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     transition: "all 0.3s ease-in-out",
// },
footer: {
    background: "linear-gradient(135deg,rgb(38, 98, 167),rgb(134, 94, 169))", /* Gradient for a vibrant look */
    color: "#fff", /* Clean and elegant text color */
    padding: "20px 10px", /* Spacing for content */
    textAlign: "center", /* Center alignment */
    borderTop: "3px solid #fff", /* Decorative border */
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", /* Soft shadow for depth */
    fontFamily: "Arial, sans-serif", /* Modern font style */
    fontSize: "14px", /* Comfortable reading size */
    letterSpacing: "0.5px", /* Adds some sophistication */
    borderRadius: "10px 10px 0 0", /* Rounded corners for a smooth finish */
    transition: "all 0.3s ease-in-out", /* Subtle hover or interactive transition */
},

p: {
    margin: "0", /* Removes unnecessary spacing */
    padding: "10px 0", /* Spaces the text properly */
    fontStyle: "italic", /* Adds elegance to the copyright text */
},

  socialMedia: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
  icon: {
    marginRight: "8px",
  },
};

export default Footer;
