import nextCookie from 'next-cookies';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import { redirect } from '../../utils/redirect';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import PodcastDetails from '../../components/dashboard/podcastDetails';

const PodcastDetailsPage = ({ podcastData, currentDomain }) => {
  return (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
      <Head>
        <title>Podcast | Podwii</title>
      </Head>
      <PodcastDetails podcastData={podcastData} />
    </DashboardLayout>
  );
};
export default PodcastDetailsPage;

PodcastDetailsPage.getInitialProps = async function (ctx) {
  const domain = getDomain(ctx.req);
  const { token } = nextCookie(ctx);
  const apiUrl = process.env.API_HOST;

  if (token === undefined) {
    redirect(ctx, '/signin');
  }

  const res = await fetch(`${apiUrl}api/v1/dashboard`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
  const data = await res.json();

  if (!data.podcast) {
    redirect(ctx, '/errors/rssfeed');
  }

  return {
    podcastData: data,
    currentDomain: domain,
  };
};
