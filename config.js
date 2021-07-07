module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Join LTL Maps on Slack',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'ltlmaps.slack.com',
  // access token of slack
  // see https://github.com/outsideris/slack-invite-automation#issue-token
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-1029712864853-1031795656647-1029524688900-3820dbbfd991dae64bfe64681ed07423',
  // an optional security measure - if it is set, then that token will be required to get invited.
  // inviteToken: process.env.INVITE_TOKEN || null,
  // an optional security measure - if both are set, then recaptcha will be used.
  //recaptchaSiteKey: process.env.RECAPTCHA_SITE || null,
  //recaptchaSecretKey: process.env.RECAPTCHA_SECRET || null,
  // default locale
  locale: process.env.LOCALE || "en",
  subpath: process.env.SUBPATH || "/",
  allowedCorsOrigin: (process.env.ALLOWED_CORS_ORIGIN || '').split(',')
};
