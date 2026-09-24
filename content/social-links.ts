export type SocialProfile = {
  name: string;
  links: { label: string; href: string; managed: boolean }[];
};

// Client pages show all supplied official accounts; Work shows managed accounts only.
export const socialProfiles: Record<string, SocialProfile> = {
  "classic-divinity": {
    name: "Classic Divinity",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/classic.divinity?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: true,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@classicdivinity?_r=1&_t=ZP-99zfY40rilr",
        managed: true,
      },
    ],
  },
  "xian-zhang": {
    name: "Xian Zhang",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/maestroxianzhang?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: true,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@maestroxianzhang?_r=1&_t=ZP-99zeTNTMDQU",
        managed: true,
      },
      {
        label: "Douyin",
        href: "https://v.douyin.com/Gg8XxrhDeeM/",
        managed: true,
      },
      {
        label: "RedNote",
        href: "https://xhslink.cn/m/Apwzkpeax6P",
        managed: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/19kifVDr9Z/?mibextid=wwXIfr",
        managed: true,
      },
    ],
  },
  "sumi-jo": {
    name: "Sumi Jo",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/sumijo_official?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: false,
      },
      {
        label: "YouTube — Topic",
        href: "https://youtube.com/channel/UCAKxQe78gunzpPmocONNwnA?si=lhiRNb2KwwvhdIEI",
        managed: false,
      },
      {
        label: "YouTube — Official Channel",
        href: "https://youtube.com/@sumijoofficialll5869?si=DxMO2CvoqlNv0mXh",
        managed: false,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1Ce3rrt3em/?mibextid=wwXIfr",
        managed: false,
      },
      {
        label: "RedNote",
        href: "https://xhslink.cn/m/8RDTClYrSZT",
        managed: true,
      },
      {
        label: "Douyin",
        href: "https://v.douyin.com/VrZ6xTgNfg0/",
        managed: true,
      },
      {
        label: "Bilibili",
        href: "https://b23.tv/xKT1QFE",
        managed: true,
      },
    ],
  },
  "jasmine-choi": {
    name: "Jasmine Choi",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/jasminechoi_flutist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: false,
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@jasminechoi?si=yyf0Ww9LS1Omh-CR",
        managed: false,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1HsSkDVKBf/?mibextid=wwXIfr",
        managed: false,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@jasminechoi.flutist?_r=1&_t=ZP-99ziVBklXSB",
        managed: false,
      },
      {
        label: "RedNote",
        href: "https://xhslink.cn/m/4x4VzocDHKW",
        managed: true,
      },
      {
        label: "Douyin",
        href: "https://v.douyin.com/rCMxS1x47ck/",
        managed: true,
      },
      {
        label: "Bilibili",
        href: "https://b23.tv/OPjwNF2",
        managed: true,
      },
    ],
  },
  "hudson-zhang-studio": {
    name: "Hudson Zhang Studio",
    links: [
      {
        label: "Instagram — Hudson Zhang Studio",
        href: "https://www.instagram.com/hudson_zhang_studio?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: true,
      },
      {
        label: "Instagram — Hudson Shaoxia Zhang",
        href: "https://www.instagram.com/hudson_shaoxia_zhang?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: true,
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@hudsonshaoxiazhang?si=I4kB2gBIYrQvOpx0",
        managed: true,
      },
      {
        label: "RedNote",
        href: "https://xhslink.cn/m/6J8v8ZuwTGp",
        managed: true,
      },
      {
        label: "Douyin",
        href: "https://v.douyin.com/USMuLpf57FQ/",
        managed: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1GxdZpa52i/?mibextid=wwXIfr",
        managed: true,
      },
    ],
  },
  "401-entertainment": {
    name: "401 Entertainment",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/401entertainment_official?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: false,
      },
    ],
  },
  "new-york-star": {
    name: "New York Star Artist Management",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/nystarartists?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: false,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@newyorkstarartists?_r=1&_t=ZP-99ziSue5oSt",
        managed: false,
      },
    ],
  },
  "sumi-jo-competition": {
    name: "Sumi Jo International Singing Competition",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/sumijoisc?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: false,
      },
    ],
  },
  "opera-italiana": {
    name: "Opera Italiana is in the Air",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/operaitalianaisintheair?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        managed: false,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@operaitalianaisintheair?_r=1&_t=ZP-99zieCoIj9i",
        managed: false,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1CwjLuy87Z/?mibextid=wwXIfr",
        managed: false,
      },
    ],
  },
};

export const workSocialSlugs = Object.keys(socialProfiles).filter((slug) =>
  socialProfiles[slug].links.some((link) => link.managed),
);
