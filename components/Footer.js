import React from 'react';

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its clone</p>
        <p>Referral accepted</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Become host</p>
        <p>Jion Now</p>
        <p>Benefits of host</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Chat</p>
        <p>Email</p>
        <p>Policies</p>
        <p>Copyright</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  );
}

export default Footer;
