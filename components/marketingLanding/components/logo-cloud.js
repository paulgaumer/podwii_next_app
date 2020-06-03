import React from 'react';

const LogoCloud = () => {
  return (
    <div id="integration" className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <p className="text-base font-semibold leading-6 tracking-wider text-center text-gray-600 uppercase font-titleMarketing">
          Fast integration with a wide range of services
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/buzzsprout-logo.svg"
              alt="buzzsprout"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/transistor-logo.svg"
              alt="transistor"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/podbean-logo.png"
              alt="podbean"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/anchor-logo.svg"
              alt="anchor"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/soundcloud-logo.svg"
              alt="soundcloud"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 px-6 py-6 bg-gray-50">
            <img
              className="max-h-14"
              src="/marketing/headliner-logo.png"
              alt="Headliner"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 px-4 py-4 bg-gray-50">
            <img
              className="max-h-20"
              src="/marketing/mailchimp-logo.png"
              alt="Mailchimp"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 px-4 py-4 bg-gray-50">
            <img
              className="max-h-16"
              src="/marketing/convertkit-logo.png"
              alt="ConvertKit"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50">
            <p className="text-lg text-gray-400 font-titleMarketing group">
              Not seeing yours?{' '}
              <a
                href="mailto:contact@podwii.com?subject=Tell me more about Podwii"
                className="inline-block text-purple-600 underline transform group-hover:scale-105"
              >
                Ask us!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
