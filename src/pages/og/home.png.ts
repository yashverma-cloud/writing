import type { APIRoute } from 'astro';
import { postCard, renderCard } from '../../og/altitude';

/** The list's Open Graph card: the post card, with the section's own line as its words. */
export const GET: APIRoute = async () => {
  const png = await renderCard(
    postCard({
      title: 'Postmortems and notes on running production infrastructure',
      description: 'Kubernetes, autoscaling, cost and observability on AWS and GCP.',
    }),
  );
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
