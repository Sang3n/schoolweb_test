import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-DP9XZk3a.css";
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Pathibhara English Boarding School" },
			{
				name: "description",
				content: "A premier English boarding school in Chamaita, Nepal — nurturing curious, courageous, and compassionate global citizens since 1998."
			},
			{
				property: "og:site_name",
				content: "Pathibhara English Boarding School"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:title",
				content: "Pathibhara English Boarding School"
			},
			{
				name: "twitter:title",
				content: "Pathibhara English Boarding School"
			},
			{
				property: "og:description",
				content: "A premier English boarding school in Chamaita, Nepal — nurturing curious, courageous, and compassionate global citizens since 1998."
			},
			{
				name: "twitter:description",
				content: "A premier English boarding school in Chamaita, Nepal — nurturing curious, courageous, and compassionate global citizens since 1998."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c1635a70-fcfa-4ca3-a53b-2f435147f33e"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c1635a70-fcfa-4ca3-a53b-2f435147f33e"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$7 = () => import("./routes-CKKb4U-P.js");
var Route$8 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Pathibhara English Boarding School — Excellence in Education" },
			{
				name: "description",
				content: "Pathibhara English Boarding School in Chamaita, Nepal — nurturing curious minds and shaping global citizens through world-class academics, modern facilities, and dedicated faculty."
			},
			{
				property: "og:title",
				content: "Pathibhara English Boarding School"
			},
			{
				property: "og:description",
				content: "Excellence in education. Shaping global citizens since 1998."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$6 = () => import("./about-CAjfkZXG.js");
var Route$7 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Pathibhara English Boarding School" },
			{
				name: "description",
				content: "Our mission, vision, history, and leadership. Discover the values that have shaped Pathibhara since 1998."
			},
			{
				property: "og:title",
				content: "About Pathibhara"
			},
			{
				property: "og:description",
				content: "Mission, vision, history, and leadership."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/academics.tsx
var $$splitComponentImporter$5 = () => import("./academics-BYVKOwOJ.js");
var Route$6 = createFileRoute("/academics")({
	head: () => ({
		meta: [
			{ title: "Academics — Pathibhara English Boarding School" },
			{
				name: "description",
				content: "Our curriculum, departments, and learning approach combine rigorous academics with character formation."
			},
			{
				property: "og:title",
				content: "Academics at Pathibhara"
			},
			{
				property: "og:description",
				content: "Curriculum, departments, faculty, and learning approach."
			},
			{
				property: "og:url",
				content: "/academics"
			}
		],
		links: [{
			rel: "canonical",
			href: "/academics"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/admissions.tsx
var $$splitComponentImporter$4 = () => import("./admissions-C9JEP__F.js");
var Route$5 = createFileRoute("/admissions")({
	head: () => ({
		meta: [
			{ title: "Admissions — Pathibhara English Boarding School" },
			{
				name: "description",
				content: "Admissions process, fee structure, scholarships, and online application for Pathibhara English Boarding School."
			},
			{
				property: "og:title",
				content: "Admissions at Pathibhara"
			},
			{
				property: "og:description",
				content: "Apply for admission, scholarships, fees, and dates."
			},
			{
				property: "og:url",
				content: "/admissions"
			}
		],
		links: [{
			rel: "canonical",
			href: "/admissions"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-4YCpLDTy.js");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Pathibhara English Boarding School" },
			{
				name: "description",
				content: "Get in touch with Pathibhara English Boarding School. Visit us in Chamaita, Nepal."
			},
			{
				property: "og:title",
				content: "Contact Pathibhara"
			},
			{
				property: "og:description",
				content: "Phone, email, address, and inquiry form."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/facilities.tsx
var $$splitComponentImporter$2 = () => import("./facilities-TK8QAqoi.js");
var Route$3 = createFileRoute("/facilities")({
	head: () => ({
		meta: [
			{ title: "Facilities — Pathibhara English Boarding School" },
			{
				name: "description",
				content: "World-class library, science labs, computer suites, sports, transport, hostel, and cafeteria."
			},
			{
				property: "og:title",
				content: "Campus Facilities"
			},
			{
				property: "og:description",
				content: "Library, labs, hostel, transport, and more."
			},
			{
				property: "og:url",
				content: "/facilities"
			}
		],
		links: [{
			rel: "canonical",
			href: "/facilities"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/news.tsx
var $$splitComponentImporter$1 = () => import("./news-Bw6OaBlg.js");
var Route$2 = createFileRoute("/news")({
	head: () => ({
		meta: [
			{ title: "News & Events — Pathibhara English Boarding School" },
			{
				name: "description",
				content: "The latest news, announcements, and upcoming events at Pathibhara."
			},
			{
				property: "og:title",
				content: "News & Events"
			},
			{
				property: "og:description",
				content: "Stay updated with Pathibhara news and events."
			},
			{
				property: "og:url",
				content: "/news"
			}
		],
		links: [{
			rel: "canonical",
			href: "/news"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/about",
			priority: "0.8",
			changefreq: "monthly"
		},
		{
			path: "/academics",
			priority: "0.8",
			changefreq: "monthly"
		},
		{
			path: "/admissions",
			priority: "0.9",
			changefreq: "weekly"
		},
		{
			path: "/student-life",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/facilities",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/news",
			priority: "0.7",
			changefreq: "weekly"
		},
		{
			path: "/contact",
			priority: "0.6",
			changefreq: "monthly"
		}
	].map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/student-life.tsx
var $$splitComponentImporter = () => import("./student-life-CaWMmSfU.js");
var Route = createFileRoute("/student-life")({
	head: () => ({
		meta: [
			{ title: "Student Life — Pathibhara English Boarding School" },
			{
				name: "description",
				content: "Clubs, sports, arts, and activities that shape character beyond the classroom."
			},
			{
				property: "og:title",
				content: "Student Life at Pathibhara"
			},
			{
				property: "og:description",
				content: "Clubs, sports, activities, and events."
			},
			{
				property: "og:url",
				content: "/student-life"
			}
		],
		links: [{
			rel: "canonical",
			href: "/student-life"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	AcademicsRoute: Route$6.update({
		id: "/academics",
		path: "/academics",
		getParentRoute: () => Route$9
	}),
	AdmissionsRoute: Route$5.update({
		id: "/admissions",
		path: "/admissions",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	FacilitiesRoute: Route$3.update({
		id: "/facilities",
		path: "/facilities",
		getParentRoute: () => Route$9
	}),
	NewsRoute: Route$2.update({
		id: "/news",
		path: "/news",
		getParentRoute: () => Route$9
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$9
	}),
	StudentLifeRoute: Route.update({
		id: "/student-life",
		path: "/student-life",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
