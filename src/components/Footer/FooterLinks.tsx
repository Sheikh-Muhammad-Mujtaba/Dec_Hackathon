import * as React from 'react';

interface FooterLinkProps {
    title: string;
    links: string[];
  }


export const FooterLinks: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col text-base">
      <div className="font-medium leading-none text-black uppercase tracking-[3px]">
        {title}
      </div>
      <div className="mt-7 leading-5 text-black text-opacity-60">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {link}
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};