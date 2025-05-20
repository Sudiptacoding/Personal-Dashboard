import React from "react";

function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-800 text-sm text-gray-400">
      © {new Date().getFullYear()} Sudipta Biswas. All rights reserved.
    </footer>
  );
}

export default Footer;
