# raphaelschaad.com

This git repo contains my personal website, currently deployed using Netlify at [raphaelschaad.com](https://raphaelschaad.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/9096afa9-2d5e-44dc-9884-7f4be8ce8032/deploy-status)](https://app.netlify.com/sites/raphaelschaad/deploys).

# To-do
- [ ] Address SEO improvements from website.grader.com
- [ ] Add all URL versions to Google Search Console (https, http, www, and bare)
- [ ] Add favicon
- [ ] Create custom 404 page (see [An Analysis of 24 Creative 404 Error Pages](https://blog.prototypr.io/an-analysis-of-24-creative-404-error-pages-7be770535a8f), [The 101 Course On Crafting 404 Pages](https://medium.muz.li/the-101-course-on-crafting-404-pages-93382461b0af))

# Domains on Netlify
Add the primary domain or a domain alias (secondary domain) by following these steps:
1. If possible, use the nameservers that the registrar provides (caveat: Netlify can only create subdomain wildcard HTTPS certs for domains they manage the DNS records for), e.g. `ns1.hover.com` and `ns2.hover.com`, which usually is the default.
2. Configure the registrar's DNS records:
  - `@` (representing the bare domain) as an `A` record pointing to Netlify's load balancer's IP `75.2.60.5` (or, if the registrar supports it, as an `ALIAS`/`ANAME` record pointing to `apex-loadbalancer.netlify.com`).
  - `www` as a `CNAME` record pointing to Netlify's default subdomain `raphaelschaad.netlify.app`.
  - Leave any mail-related DNS records.
3. Add both the bare and www-variant of the domain in Netlify's custom domains settings.

If the registrar doesn't provide/charges for nameserver (e.g. switchplus.ch), first, [setup DNS](https://app.netlify.com/account/dns/setup) and [add records](https://app.netlify.com/account/dns) like in step #2 above at Netlify. Then, change the nameservers at the registrar to the ones Netlify provides. Finally, follow step #3 above.

To forward all possible combinations of a domain alias (`[http[s]://][www.]raphaelschaad.x[/[y]]`) to the primary domain (`https://raphaelschaad.com[/[y]]`), follow the steps above and redirect both the bare and www-variant of the domain alias to the primary domain in the [netlify.toml](./netlify.toml) configuration file. Don't use the registrar's forward feature (e.g. Hover's): it doesn't support HTTPS, so `https://` requests to the domain alias fail. Note that there is no easy way to catch random subdomains and redirect them, nor does it seem to be a convention with the big guys.
