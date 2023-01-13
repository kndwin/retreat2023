const theme = {
  logo: <b>Kids Church Retreat - 2023</b>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Kids Retreat 2023" />
      <meta property="og:description" content="St John's Kids retreat 2023" />
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s",
    };
  },
  // https://github.com/shuding/nextra/pull/1206
  toc: {
    extraContent: () => <></>,
  },
  footer: {
    component: () => <></>,
  },
};

export default theme;
