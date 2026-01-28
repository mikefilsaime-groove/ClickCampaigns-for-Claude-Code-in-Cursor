const pptxgen = require('pptxgenjs');

// Brand colors (no # prefix for PptxGenJS)
const C = {
  primary: '8b5cf6',      // Purple
  secondary: '7c3aed',    // Deep purple
  accent: '06b6d4',       // Cyan/teal
  dark: '1e1b4b',         // Dark purple (for impact slides)
  white: 'ffffff',
  lightBg: 'f8fafc',      // Light gray background
  text: '1e293b',         // Dark slate
  muted: '64748b',        // Gray
  green: '22c55e',        // Success green
  red: 'dc2626',          // Urgency red
  orange: 'f97316'        // Warning orange
};

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'Make 2026 Your AI-Powered Marketing Suite Year';
pptx.author = 'Mike Filsaime';

// Helper functions
function addTitleSlide(title, subtitle, bgColor = C.dark) {
  const slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: bgColor } });
  slide.addText(title, { x: 0.5, y: 2.5, w: 9, h: 1.5, fontSize: 44, bold: true, color: C.white, align: 'center' });
  if (subtitle) {
    slide.addText(subtitle, { x: 0.5, y: 4.2, w: 9, h: 0.8, fontSize: 22, color: C.accent, align: 'center' });
  }
  return slide;
}

function addContentSlide(title, bullets, highlight = null) {
  const slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.primary } });
  slide.addText(title, { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });

  const bulletText = bullets.map(b => ({ text: b, options: { bullet: true, paraSpaceBefore: 8 } }));
  slide.addText(bulletText, { x: 0.7, y: 1.6, w: 8.6, h: 3.5, fontSize: 20, color: C.text, valign: 'top' });

  if (highlight) {
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.7, fill: { color: C.accent }, rectRadius: 0.1 });
    slide.addText(highlight, { x: 0.5, y: 4.5, w: 9, h: 0.7, fontSize: 18, bold: true, color: C.white, align: 'center', valign: 'middle' });
  }
  return slide;
}

function addStatementSlide(statement, subtext = null, bgColor = C.secondary) {
  const slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: bgColor } });
  slide.addText(statement, { x: 0.5, y: 2, w: 9, h: 2, fontSize: 36, bold: true, color: C.white, align: 'center', valign: 'middle' });
  if (subtext) {
    slide.addText(subtext, { x: 0.5, y: 4.2, w: 9, h: 0.8, fontSize: 20, color: C.white, align: 'center' });
  }
  return slide;
}

function addTwoColumnSlide(title, leftContent, rightContent) {
  const slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.primary } });
  slide.addText(title, { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });

  const leftBullets = leftContent.map(b => ({ text: b, options: { bullet: true, paraSpaceBefore: 6 } }));
  slide.addText(leftBullets, { x: 0.5, y: 1.5, w: 4.3, h: 3.5, fontSize: 16, color: C.text, valign: 'top' });

  const rightBullets = rightContent.map(b => ({ text: b, options: { bullet: true, paraSpaceBefore: 6 } }));
  slide.addText(rightBullets, { x: 5.2, y: 1.5, w: 4.3, h: 3.5, fontSize: 16, color: C.text, valign: 'top' });

  return slide;
}

// ========== SLIDE 1: Welcome Screen ==========
const slide1 = pptx.addSlide();
slide1.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.dark } });
slide1.addText('Starting Soon...', { x: 0.5, y: 2, w: 9, h: 0.8, fontSize: 32, color: C.accent, align: 'center' });
slide1.addText('Make 2026 Your AI-Powered\nMarketing Suite Year', { x: 0.5, y: 2.8, w: 9, h: 1.8, fontSize: 44, bold: true, color: C.white, align: 'center' });
slide1.addText('Type in chat: What software are you currently using?', { x: 0.5, y: 4.8, w: 9, h: 0.6, fontSize: 18, color: C.muted, align: 'center' });

// ========== SLIDE 2: Title Slide ==========
addTitleSlide('Make 2026 Your AI-Powered\nMarketing Suite Year', 'How to Run Your Entire Business From ONE Platform');

// ========== SLIDE 3: The Promise ==========
addContentSlide('What You\'ll Discover Today', [
  'Why the "duct-tape tech stack" is costing you more than money',
  'The NEW model that smartest entrepreneurs are switching to in 2026',
  'The exact platform that lets you run your ENTIRE business from one dashboard',
  'A special offer only available to webinar attendees'
], 'Type "YES" in the chat if you\'re ready to dive in!');

// ========== SLIDE 4: Who Am I ==========
const slide4 = pptx.addSlide();
slide4.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.primary } });
slide4.addText('Who Is Mike Filsaime?', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
slide4.addText('20+ Years Building Software for Entrepreneurs', { x: 0.5, y: 1.5, w: 9, h: 0.6, fontSize: 22, bold: true, color: C.text });
const platforms = ['Groove.cm', 'Kartra', 'WebinarJam', 'EverWebinar', 'Courses.gg'];
const platformBullets = platforms.map(p => ({ text: p, options: { bullet: true, paraSpaceBefore: 6 } }));
slide4.addText(platformBullets, { x: 0.7, y: 2.2, w: 4, h: 2.5, fontSize: 20, color: C.text });
slide4.addText('Used by millions of entrepreneurs worldwide', { x: 5, y: 2.2, w: 4.5, h: 2.5, fontSize: 18, color: C.muted, valign: 'top' });
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.7, fill: { color: C.lightBg }, rectRadius: 0.1 });
slide4.addText('$100M+ in product sales', { x: 0.5, y: 4.5, w: 9, h: 0.7, fontSize: 20, bold: true, color: C.primary, align: 'center', valign: 'middle' });

// ========== SLIDE 5: My Story ==========
addStatementSlide('I Know What You\'re Going Through', 'Because I\'ve been there too...', C.dark);

// ========== SLIDE 6: The Duct Tape Tech Stack ==========
const slide6 = pptx.addSlide();
slide6.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.red } });
slide6.addText('The "Duct Tape Tech Stack"', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
const tools = ['ClickFunnels for funnels', 'ActiveCampaign for email', 'Kajabi for courses', 'GoHighLevel for CRM', 'Calendly for scheduling', 'SamCart for checkout', 'Zoom for webinars', 'Skool for community'];
const toolBullets = tools.map(t => ({ text: t, options: { bullet: true, paraSpaceBefore: 4 } }));
slide6.addText(toolBullets, { x: 0.7, y: 1.4, w: 8.6, h: 3.2, fontSize: 18, color: C.text });
slide6.addText('8+ platforms that don\'t talk to each other', { x: 0.5, y: 4.7, w: 9, h: 0.5, fontSize: 18, bold: true, color: C.red, align: 'center' });

// ========== SLIDE 7: The True Cost ==========
const slide7 = pptx.addSlide();
slide7.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.red } });
slide7.addText('The True Cost', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
const costs = [
  ['ClickFunnels', '$147/mo'],
  ['Kajabi', '$149/mo'],
  ['GoHighLevel', '$297/mo'],
  ['ActiveCampaign', '$49/mo'],
  ['SamCart', '$99/mo'],
  ['Calendly Pro', '$12/mo'],
  ['EverWebinar', '$42/mo'],
  ['Skool', '$99/mo']
];
slide7.addTable(costs, { x: 0.5, y: 1.4, w: 5, colW: [3, 2], fontSize: 16, border: { pt: 0.5, color: 'e2e8f0' }, fill: { color: C.lightBg } });
slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6, y: 2, w: 3.5, h: 1.5, fill: { color: C.red }, rectRadius: 0.2 });
slide7.addText('$1,000+\nper month', { x: 6, y: 2, w: 3.5, h: 1.5, fontSize: 28, bold: true, color: C.white, align: 'center', valign: 'middle' });
slide7.addText('$12,000+ per year', { x: 6, y: 3.7, w: 3.5, h: 0.6, fontSize: 20, color: C.red, align: 'center' });

// ========== SLIDE 8: Hidden Costs ==========
addContentSlide('It\'s Not Just Money...', [
  'TIME: Hours managing tools, setting up integrations, troubleshooting',
  'ENERGY: Mental load of switching dashboards, stress of broken systems',
  'GROWTH: Every hour on tech = hour NOT on strategy and clients',
  'OPPORTUNITIES: Campaigns you didn\'t launch because tech was too hard'
]);

// ========== SLIDE 9: Not Your Fault ==========
addStatementSlide('This Is NOT Your Fault', 'The software industry WANTS you fragmented', C.dark);

// ========== SLIDE 10: Breaking Point ==========
addStatementSlide('"There Has To Be\nA Better Way"', 'If you\'ve ever had that thought... today is your answer.', C.secondary);

// ========== SLIDE 11: The New Model ==========
const slide11 = pptx.addSlide();
slide11.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.primary } });
slide11.addText('The New Model', { x: 0.5, y: 1.5, w: 9, h: 0.8, fontSize: 24, color: C.accent, align: 'center' });
slide11.addText('One Platform.\nEverything You Need.', { x: 0.5, y: 2.3, w: 9, h: 2, fontSize: 44, bold: true, color: C.white, align: 'center' });
slide11.addText('No integrations. No Zapier. No praying things don\'t break.', { x: 0.5, y: 4.5, w: 9, h: 0.6, fontSize: 20, color: C.white, align: 'center' });

// ========== SLIDE 12: Introducing Scale Plus ==========
const slide12 = pptx.addSlide();
slide12.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.dark } });
slide12.addText('Introducing', { x: 0.5, y: 2, w: 9, h: 0.6, fontSize: 24, color: C.accent, align: 'center' });
slide12.addText('Scale Plus', { x: 0.5, y: 2.6, w: 9, h: 1.2, fontSize: 56, bold: true, color: C.white, align: 'center' });
slide12.addText('The Only TRUE All-in-One Platform', { x: 0.5, y: 4, w: 9, h: 0.6, fontSize: 22, color: C.primary, align: 'center' });
slide12.addText('25+ integrated applications. One platform. One price.', { x: 0.5, y: 4.7, w: 9, h: 0.5, fontSize: 18, color: C.muted, align: 'center' });

// ========== SLIDE 13: Groove.cm Foundation ==========
addTwoColumnSlide('The Groove.cm Foundation', [
  'GrooveFunnels - Complete funnels',
  'GroovePages - Website builder',
  'GrooveSell - Zero-fee checkout',
  'GrooveMail - Email automation',
  'GrooveMember - Courses & memberships',
  'GrooveWebinar - Automated webinars'
], [
  'GrooveAffiliate - Affiliate programs',
  'GrooveVideo - Video hosting',
  'GrooveBlog - SEO blogging',
  'GrooveKart - E-commerce',
  'GrooveProof - Social proof',
  'GrooveForms & Pop-Ups'
]);

// ========== SLIDE 14: AI-Powered Tools ==========
const slide14 = pptx.addSlide();
slide14.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.accent } });
slide14.addText('AI-Powered Tools', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
const aiTools = [
  ['ClickCampaigns.ai', 'Complete campaigns in minutes'],
  ['ChatBaser.ai', '24/7 AI chatbots for your business'],
  ['BrandBaser', 'On-brand content generation'],
  ['HighTicketGPT', 'VSL scripts & webinar copy'],
  ['ScaleGPT', 'Custom AI assistants']
];
aiTools.forEach((tool, i) => {
  const y = 1.5 + (i * 0.65);
  slide14.addText(tool[0], { x: 0.7, y: y, w: 3, h: 0.55, fontSize: 18, bold: true, color: C.primary });
  slide14.addText(tool[1], { x: 3.8, y: y, w: 5.7, h: 0.55, fontSize: 16, color: C.text });
});
slide14.addText('Your unfair advantage in 2026', { x: 0.5, y: 4.8, w: 9, h: 0.4, fontSize: 18, bold: true, color: C.accent, align: 'center' });

// ========== SLIDE 15: CRM & Business Ops ==========
addTwoColumnSlide('CRM & Business Operations', [
  'PipeLeads.ai CRM - Pipeline management',
  'PipeLeads.ai LeadFinder - Find prospects',
  'Invoicer - Professional billing'
], [
  'CalendarBug - Online scheduling',
  'FunnelMapper.io - Visual planning',
  'QuizFunnels - Lead qualification',
  'Courses.gg - Zero platform fees'
]);

// ========== SLIDE 16: Email Partnership ==========
const slide16 = pptx.addSlide();
slide16.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.primary } });
slide16.addText('TinyEmail Partnership', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
slide16.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.5, w: 4.2, h: 1.8, fill: { color: C.lightBg }, rectRadius: 0.15 });
slide16.addText('FREE Plan', { x: 0.5, y: 1.6, w: 4.2, h: 0.5, fontSize: 20, bold: true, color: C.green, align: 'center' });
slide16.addText('15,000 emails/month\n500 contacts', { x: 0.5, y: 2.2, w: 4.2, h: 0.9, fontSize: 18, color: C.text, align: 'center' });
slide16.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 1.5, w: 4.2, h: 1.8, fill: { color: C.primary }, rectRadius: 0.15 });
slide16.addText('Upgraded: $14.97/mo', { x: 5.3, y: 1.6, w: 4.2, h: 0.5, fontSize: 20, bold: true, color: C.white, align: 'center' });
slide16.addText('200,000 emails/month\nUnlimited contacts', { x: 5.3, y: 2.2, w: 4.2, h: 0.9, fontSize: 18, color: C.white, align: 'center' });
slide16.addText('96% off normal pricing ($450/mo value)', { x: 0.5, y: 3.6, w: 9, h: 0.5, fontSize: 18, color: C.green, align: 'center' });

// ========== SLIDE 17: Everything Together ==========
const slide17 = pptx.addSlide();
slide17.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.dark } });
slide17.addText('25+ Applications', { x: 0.5, y: 1.2, w: 9, h: 0.6, fontSize: 24, color: C.accent, align: 'center' });
slide17.addText('One Platform. One Login.', { x: 0.5, y: 1.9, w: 9, h: 1, fontSize: 40, bold: true, color: C.white, align: 'center' });
slide17.addText('Everything designed to work together because it was BUILT together.', { x: 0.5, y: 3.2, w: 9, h: 0.6, fontSize: 20, color: C.white, align: 'center' });
slide17.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 2.5, y: 4.2, w: 5, h: 0.8, fill: { color: C.accent }, rectRadius: 0.15 });
slide17.addText('Type "ALL IN ONE" in the chat!', { x: 2.5, y: 4.2, w: 5, h: 0.8, fontSize: 20, bold: true, color: C.white, align: 'center', valign: 'middle' });

// ========== SLIDE 18: Who This Works For ==========
const slide18 = pptx.addSlide();
slide18.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.primary } });
slide18.addText('Who Is Scale Plus For?', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
const audiences = [
  ['Digital Marketers', 'Course creators, info product sellers, funnel builders'],
  ['Client Service Pros', 'Coaches, consultants, agency owners'],
  ['New Entrepreneurs', 'Just getting started - don\'t waste money learning expensive tools']
];
audiences.forEach((aud, i) => {
  const y = 1.5 + (i * 1.1);
  slide18.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.95, fill: { color: C.lightBg }, rectRadius: 0.1 });
  slide18.addText(aud[0], { x: 0.7, y: y + 0.1, w: 8.6, h: 0.4, fontSize: 20, bold: true, color: C.primary });
  slide18.addText(aud[1], { x: 0.7, y: y + 0.5, w: 8.6, h: 0.4, fontSize: 16, color: C.text });
});

// ========== SLIDE 19-21: Case Studies ==========
const caseStudies = [
  ['Marc\'s Story', 'Digital Marketing Business', ['Running 5 different platforms', 'Paying $600+/month', 'Switched to Scale Plus in 2 weeks', 'Software costs dropped 80%', 'Got his TIME back']],
  ['Robyn\'s Story', 'Executive Coach', ['Drowning in admin work', 'Manual follow-ups and spreadsheets', 'Now has automated onboarding', 'Recurring invoicing set up', '"Finally running my business, not the other way around"']],
  ['Tom\'s Story', 'Marketing Agency', ['Skeptical of "all-in-one" promises', 'Entire team migrated in 2 weeks', 'Uses CRM, invoicing, email, funnels', '"First platform that actually delivers"']]
];

caseStudies.forEach(cs => {
  const slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.green } });
  slide.addText(cs[0], { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
  slide.addText(cs[1], { x: 0.5, y: 1.4, w: 9, h: 0.5, fontSize: 20, color: C.primary });
  const bullets = cs[2].map(b => ({ text: b, options: { bullet: true, paraSpaceBefore: 6 } }));
  slide.addText(bullets, { x: 0.7, y: 2, w: 8.6, h: 2.8, fontSize: 18, color: C.text });
});

// ========== SLIDE 22: By The Numbers ==========
const slide22 = pptx.addSlide();
slide22.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.primary } });
slide22.addText('By The Numbers', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
const stats = [
  ['100,000+', 'Entrepreneurs served'],
  ['20+', 'Years of experience'],
  ['$100M+', 'Products sold'],
  ['Millions', 'Courses delivered']
];
stats.forEach((stat, i) => {
  const x = 0.5 + (i * 2.4);
  slide22.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.8, w: 2.2, h: 2.4, fill: { color: C.lightBg }, rectRadius: 0.15 });
  slide22.addText(stat[0], { x: x, y: 2, w: 2.2, h: 0.8, fontSize: 28, bold: true, color: C.primary, align: 'center' });
  slide22.addText(stat[1], { x: x, y: 2.9, w: 2.2, h: 1, fontSize: 14, color: C.text, align: 'center' });
});
slide22.addText('Proven technology, refined over two decades', { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 18, color: C.muted, align: 'center' });

// ========== SLIDE 23: Let's Talk Price ==========
addStatementSlide('What Would All This\nBe Worth?', '$1,000+/month if bought separately... $12,000+/year', C.dark);

// ========== SLIDE 24: The 2026 Fresh Start Offer ==========
const slide24 = pptx.addSlide();
slide24.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.green } });
slide24.addText('The 2026 Fresh Start Offer', { x: 0.5, y: 1.2, w: 9, h: 0.6, fontSize: 24, color: C.white, align: 'center' });
slide24.addText('$497', { x: 0.5, y: 2, w: 9, h: 1.2, fontSize: 72, bold: true, color: C.white, align: 'center' });
slide24.addText('For Your Entire First Year', { x: 0.5, y: 3.3, w: 9, h: 0.6, fontSize: 28, color: C.white, align: 'center' });
slide24.addText('That\'s 70% OFF  |  Just $41.42/month', { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 22, bold: true, color: C.dark, align: 'center' });

// ========== SLIDE 25: The Savings ==========
const slide25 = pptx.addSlide();
slide25.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.green } });
slide25.addText('Your Savings', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
slide25.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.5, w: 4.2, h: 1.5, fill: { color: C.lightBg }, rectRadius: 0.15 });
slide25.addText('Regular Price', { x: 0.5, y: 1.6, w: 4.2, h: 0.4, fontSize: 16, color: C.muted, align: 'center' });
slide25.addText('$1,788/year', { x: 0.5, y: 2, w: 4.2, h: 0.8, fontSize: 28, color: C.text, align: 'center', strike: true });
slide25.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 1.5, w: 4.2, h: 1.5, fill: { color: C.green }, rectRadius: 0.15 });
slide25.addText('Your Price Today', { x: 5.3, y: 1.6, w: 4.2, h: 0.4, fontSize: 16, color: C.white, align: 'center' });
slide25.addText('$497/year', { x: 5.3, y: 2, w: 4.2, h: 0.8, fontSize: 32, bold: true, color: C.white, align: 'center' });
slide25.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 2.5, y: 3.5, w: 5, h: 1.2, fill: { color: C.primary }, rectRadius: 0.15 });
slide25.addText('You Save $1,291', { x: 2.5, y: 3.6, w: 5, h: 0.5, fontSize: 24, bold: true, color: C.white, align: 'center' });
slide25.addText('in year one alone', { x: 2.5, y: 4.1, w: 5, h: 0.4, fontSize: 18, color: C.white, align: 'center' });
slide25.addText('Compared to separate tools: Save $10,000+/year', { x: 0.5, y: 4.9, w: 9, h: 0.4, fontSize: 18, bold: true, color: C.green, align: 'center' });

// ========== SLIDE 26: What's Included Recap ==========
const slide26 = pptx.addSlide();
slide26.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.0, fill: { color: C.primary } });
slide26.addText('Everything Included', { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 26, bold: true, color: C.white });
const included = [
  'GrooveFunnels', 'GroovePages', 'GrooveSell', 'GrooveMail', 'GrooveMember', 'GrooveWebinar',
  'GrooveAffiliate', 'GrooveVideo', 'GrooveBlog', 'ClickCampaigns.ai', 'ChatBaser.ai', 'BrandBaser',
  'HighTicketGPT', 'ScaleGPT', 'PipeLeads CRM', 'LeadFinder', 'Invoicer', 'CalendarBug',
  'FunnelMapper', 'QuizFunnels', 'Courses.gg', 'TinyEmail Free'
];
const cols = 3;
const rows = Math.ceil(included.length / cols);
for (let i = 0; i < included.length; i++) {
  const col = i % cols;
  const row = Math.floor(i / cols);
  const x = 0.5 + (col * 3.2);
  const y = 1.2 + (row * 0.42);
  slide26.addText(`+ ${included[i]}`, { x: x, y: y, w: 3.1, h: 0.38, fontSize: 13, color: C.text });
}
slide26.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 2.5, y: 4.7, w: 5, h: 0.55, fill: { color: C.green }, rectRadius: 0.1 });
slide26.addText('All for just $497/year', { x: 2.5, y: 4.7, w: 5, h: 0.55, fontSize: 18, bold: true, color: C.white, align: 'center', valign: 'middle' });

// ========== SLIDE 27: The Guarantee ==========
const slide27 = pptx.addSlide();
slide27.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.dark } });
slide27.addShape(pptx.shapes.OVAL, { x: 3.5, y: 1.2, w: 3, h: 3, fill: { color: C.green } });
slide27.addText('30-Day\nMoney-Back\nGuarantee', { x: 3.5, y: 1.8, w: 3, h: 2, fontSize: 22, bold: true, color: C.white, align: 'center', valign: 'middle' });
slide27.addText('No questions asked. No hoops.', { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 20, color: C.white, align: 'center' });
slide27.addText('You have nothing to lose.', { x: 0.5, y: 4.9, w: 9, h: 0.4, fontSize: 18, color: C.accent, align: 'center' });

// ========== SLIDE 28: Why Now ==========
addContentSlide('Why This Matters for 2026', [
  '2026 is a pivotal year for online business',
  'AI is changing everything - the right tools = pull ahead',
  'Still duct-taping platforms? You\'ll struggle.',
  '70% off for a full year - only during this launch',
  'After launch: price goes back to $149/month'
]);

// ========== SLIDE 29: The Decision ==========
const slide29 = pptx.addSlide();
slide29.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.secondary } });
slide29.addText('Two Paths Forward', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
slide29.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.5, w: 4.4, h: 2.8, fill: { color: C.lightBg }, rectRadius: 0.15 });
slide29.addText('Choice 1', { x: 0.4, y: 1.6, w: 4.4, h: 0.5, fontSize: 20, bold: true, color: C.red, align: 'center' });
slide29.addText('Close this webinar\nKeep paying $1,000+/month\nKeep troubleshooting\nHope something changes', { x: 0.6, y: 2.2, w: 4, h: 1.8, fontSize: 15, color: C.text, align: 'center' });
slide29.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 1.5, w: 4.4, h: 2.8, fill: { color: C.green }, rectRadius: 0.15 });
slide29.addText('Choice 2', { x: 5.2, y: 1.6, w: 4.4, h: 0.5, fontSize: 20, bold: true, color: C.white, align: 'center' });
slide29.addText('Join Scale Plus for $497\nCancel other subscriptions\nStart 2026 with clarity\nMoney back in your pocket', { x: 5.4, y: 2.2, w: 4, h: 1.8, fontSize: 15, color: C.white, align: 'center' });

// ========== SLIDE 30: CTA Screen ==========
const slide30 = pptx.addSlide();
slide30.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.green } });
slide30.addText('Get Scale Plus Now', { x: 0.5, y: 1.8, w: 9, h: 0.8, fontSize: 36, bold: true, color: C.white, align: 'center' });
slide30.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 2, y: 2.8, w: 6, h: 1.2, fill: { color: C.white }, rectRadius: 0.2 });
slide30.addText('$497/Year - Click Below', { x: 2, y: 2.8, w: 6, h: 1.2, fontSize: 32, bold: true, color: C.green, align: 'center', valign: 'middle' });
slide30.addText('30-Day Guarantee  |  Instant Access  |  Cancel Anytime', { x: 0.5, y: 4.3, w: 9, h: 0.5, fontSize: 18, color: C.white, align: 'center' });

// ========== SLIDE 31: FAQ ==========
const slide31 = pptx.addSlide();
slide31.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1.2, fill: { color: C.primary } });
slide31.addText('Common Questions', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.white });
const faqs = [
  ['How long to set up?', 'First funnel live within a day'],
  ['Can I import existing stuff?', 'Yes - migration tools & support included'],
  ['What if I need help?', 'Full support, tutorials, and community'],
  ['Really one-time for the year?', 'Yes. $497 covers full first year'],
  ['What\'s the catch?', 'No catch. We succeed when you succeed']
];
faqs.forEach((faq, i) => {
  const y = 1.35 + (i * 0.65);
  slide31.addText(faq[0], { x: 0.5, y: y, w: 4, h: 0.55, fontSize: 15, bold: true, color: C.primary });
  slide31.addText(faq[1], { x: 4.6, y: y, w: 5, h: 0.55, fontSize: 14, color: C.text });
});

// ========== SLIDE 32: Final Push ==========
addStatementSlide('Your 2026\nStarts Now', 'Click the button. Join Scale Plus. Make 2026 different.', C.primary);

// ========== SLIDE 33: Thank You ==========
const slide33 = pptx.addSlide();
slide33.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.dark } });
slide33.addText('Thank You!', { x: 0.5, y: 2, w: 9, h: 1, fontSize: 48, bold: true, color: C.white, align: 'center' });
slide33.addText('Click Below to Get Started', { x: 0.5, y: 3.2, w: 9, h: 0.6, fontSize: 24, color: C.accent, align: 'center' });
slide33.addText('Let\'s make 2026 incredible.', { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 20, color: C.muted, align: 'center' });

// Save the presentation
const outputPath = '/Users/mikefilsaime/GitHub/ClickCampaigns-for-Claude-Code-in-Cursor/campaigns/scale-plus-test/output-assets/presentations/scale-plus-2026-webinar.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(() => console.log('Presentation saved to:', outputPath))
  .catch(err => console.error('Error:', err));
