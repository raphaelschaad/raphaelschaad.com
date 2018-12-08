# raphaelschaad.com

## Domains on Netlify
To redirect all possible combinations (`[http[s]://][www.]raphaelschaad.x[/[y]]`) of one of my secondary domains to my primary domain (`https://raphaelschaad.com[/[y]]`), follow these steps (note that there is no easy way to catch random subdomains and redirect them, nor does it seem to be a convention with the big guys):

1. If possible, use the nameservers that the registrar provides, e.g. `ns1.hover.com` and `ns2.hover.com`, which usually is the default.
2. Configure the registrar's DNS records:
  - `@` (representing no hostname) as an `A` record pointing to Netlify's load balancer's IP `104.198.14.52`.
  - `www` as a `CNAME` record pointing to Netlify's default subdomain `raphaelschaad.netlify.com`.
  - Leave any mail-related DNS records
3. [Configure Netlify's custom domains](https://app.netlify.com/sites/raphaelschaad/settings/domain) by adding both domain aliases: `raphaelschaad.x`, `www.raphaelschaad.x`

If the registrar doesn't provide/charges for nameserver (e.g. switchplus.ch), first, [setup DNS](https://app.netlify.com/account/dns/setup) and [add records](https://app.netlify.com/account/dns) like in step #2 above at Netlify. Then, change the nameservers at the registrar to the ones Netlify provides. Finally, follow step #3 above.

To have the URL in the browser display the primary domain even when coming from a secondary domain, redirect domain aliases to the primary domain using the `_redirects` file.
