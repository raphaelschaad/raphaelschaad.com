# raphaelschaad.com

This git repo contains my personal website, currently deployed using Netlify at [raphaelschaad.com](https://raphaelschaad.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/9096afa9-2d5e-44dc-9884-7f4be8ce8032/deploy-status)](https://app.netlify.com/sites/raphaelschaad/deploys).

## To-do
- [ ] Address SEO improvements from website.grader.com
- [ ] Add all URL versions to Google Search Console (https, http, www, and non-www)
- [ ] Add favicon
- [ ] Create custom 404 page (see [An Analysis of 24 Creative 404 Error Pages](https://blog.prototypr.io/an-analysis-of-24-creative-404-error-pages-7be770535a8f), [The 101 Course On Crafting 404 Pages](https://medium.muz.li/the-101-course-on-crafting-404-pages-93382461b0af))

## Domains on Netlify
To redirect all possible combinations (`[http[s]://][www.]raphaelschaad.x[/[y]]`) of one of my secondary domains to my primary domain (`https://raphaelschaad.com[/[y]]`), follow these steps (note that there is no easy way to catch random subdomains and redirect them, nor does it seem to be a convention with the big guys):

1. If possible, use the nameservers that the registrar provides (caveat: Netlify can only create wildcard HTTPS certs for domains they manage the DNS records for), e.g. `ns1.hover.com` and `ns2.hover.com`, which usually is the default.
2. Configure the registrar's DNS records:
  - `@` (representing no hostname) as an `A` record pointing to Netlify's load balancer's IP `104.198.14.52`.
  - `www` as a `CNAME` record pointing to Netlify's default subdomain `raphaelschaad.netlify.com`.
  - Leave any mail-related DNS records
3. [Configure Netlify's custom domains](https://app.netlify.com/sites/raphaelschaad/settings/domain) by adding both domain aliases: `raphaelschaad.x`, `www.raphaelschaad.x`

If the registrar doesn't provide/charges for nameserver (e.g. switchplus.ch), first, [setup DNS](https://app.netlify.com/account/dns/setup) and [add records](https://app.netlify.com/account/dns) like in step #2 above at Netlify. Then, change the nameservers at the registrar to the ones Netlify provides. Finally, follow step #3 above.

To have the URL in the browser display the primary domain even when coming from a secondary domain, redirect domain aliases to the primary domain using the `_redirects` file.
