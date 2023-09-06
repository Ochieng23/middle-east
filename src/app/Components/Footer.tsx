import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Essay Help</p>
      </footer>
    </div>
  );
}

export default Footer;
