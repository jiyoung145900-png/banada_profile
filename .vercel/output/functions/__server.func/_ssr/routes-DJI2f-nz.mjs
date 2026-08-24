import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Download, i as ImagePlus, r as RotateCcw, t as X } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as toPng } from "../_libs/html-to-image.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJI2f-nz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BananaMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("shrink-0", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "16",
			cy: "16",
			r: "16",
			fill: "#F0C400"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "21.5",
			cy: "11.5",
			r: "12",
			fill: "#12110e"
		})]
	});
}
var CARD_TEMPLATES = [
	"noir",
	"ivory",
	"stripe"
];
var DEFAULT_PROFILE = {
	name: "이아름",
	age: "28",
	height: "165",
	cupSize: "C컵",
	weight: "50",
	charm: "밝은 미소, 섬세한 마음",
	job: "아티스트",
	bio: "아름다운 순간들을 소중히 여기며, 진정한 인연을 기다립니다.",
	hobbies: "아트 갤러리, 요가, 와인, 클래식",
	photo: null,
	photoPos: 28,
	template: "noir"
};
var TEMPLATE_META = {
	noir: {
		label: "Noir",
		hint: "풀블리드 · 다크"
	},
	ivory: {
		label: "Ivory",
		hint: "매거진 · 크림"
	},
	stripe: {
		label: "Stripe",
		hint: "바나나 밴드"
	}
};
function parseHobbies(raw) {
	return raw.split(/[,，]/).map((h) => h.trim()).filter(Boolean).slice(0, 8);
}
function downloadName(name) {
	return `BANADA_${name.replace(/[^\w가-힣]+/g, "_").replace(/^_|_$/g, "") || "profile"}.png`;
}
async function readPhotoFile(file) {
	if (!file.type.startsWith("image/")) throw new Error("이미지 파일만 올릴 수 있어요.");
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
	const width = Math.round(bitmap.width * scale);
	const height = Math.round(bitmap.height * scale);
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("사진을 처리할 수 없어요.");
	ctx.drawImage(bitmap, 0, 0, width, height);
	bitmap.close();
	return canvas.toDataURL("image/jpeg", .9);
}
function Crescent({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16.2 3.2a9 9 0 1 0 3.1 16.6 7.25 7.25 0 1 1-3.1-16.6z"
		})
	});
}
var ProfileCard = (0, import_react.forwardRef)(function ProfileCard({ profile, className }, ref) {
	const hobbies = parseHobbies(profile.hobbies);
	const title = [profile.name, profile.age].filter(Boolean).join(", ");
	const stats = [
		profile.height ? `${profile.height}cm` : null,
		profile.cupSize || null,
		profile.weight ? `${profile.weight}kg` : null,
		profile.job || null
	].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref,
		className: cn("banada-card", `theme-${profile.template}`, className),
		children: [
			profile.template === "stripe" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "banada-card-stripe-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BANADA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PROFILE" })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "banada-card-photo",
				children: [
					profile.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile.photo,
						alt: "",
						style: { objectPosition: `50% ${profile.photoPos}%` }
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "banada-card-photo-empty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "banada-card-watermark",
								children: "BANADA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crescent, { className: "banada-card-empty-mark" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "사진 추가" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "banada-card-veil" }),
					profile.template !== "stripe" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "banada-card-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crescent, { className: "banada-card-brand-mark" }), "BANADA"]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "banada-card-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "banada-card-name",
						children: title || "이름"
					}),
					stats.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "banada-card-stats",
						children: stats.join("  ·  ")
					}) : null,
					profile.charm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "banada-card-charm",
						children: profile.charm
					}) : null,
					profile.bio ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "banada-card-bio",
						children: profile.bio
					}) : null,
					hobbies.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "banada-card-tags",
						children: hobbies.map((hobby) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: hobby }, hobby))
					}) : null
				]
			})
		]
	});
});
function PhotoDropzone({ photo, onPhoto }) {
	const inputRef = (0, import_react.useRef)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const takeFile = (0, import_react.useCallback)(async (file) => {
		if (!file) return;
		setError(null);
		try {
			onPhoto(await readPhotoFile(file));
		} catch (err) {
			setError(err instanceof Error ? err.message : "업로드에 실패했어요.");
		}
	}, [onPhoto]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "button",
				tabIndex: 0,
				onClick: () => inputRef.current?.click(),
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						inputRef.current?.click();
					}
				},
				onDragEnter: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					takeFile(e.dataTransfer.files[0]);
				},
				className: cn("relative flex min-h-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-ink-3 text-center", "shadow-[inset_0_0_0_1px_var(--color-line)]", "transition-[box-shadow,background-color] duration-150 ease-out", dragging && "bg-ink-2 shadow-[inset_0_0_0_1.5px_var(--color-banana)]"),
				children: [
					photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo,
						alt: "업로드한 프로필",
						className: "absolute inset-0 size-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-2 px-4 py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-md bg-ink-2 text-banana",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
									className: "size-5",
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-fg",
								children: "사진 올리기"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-fg-subtle",
								children: "드래그하거나 탭해서 선택"
							})
						]
					}),
					photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-150 hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-0 flex items-center justify-center text-sm font-medium text-paper",
							children: "사진 바꾸기"
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "file",
						accept: "image/*",
						className: "sr-only",
						onChange: (e) => {
							takeFile(e.target.files?.[0]);
							e.target.value = "";
						}
					})
				]
			}),
			photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPhoto(null),
				className: "inline-flex h-9 items-center gap-1.5 text-xs text-fg-muted transition-colors duration-150 hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-3.5",
					strokeWidth: 2
				}), "사진 제거"]
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-red-400",
				children: error
			}) : null
		]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md bg-ink-3 px-3.5 text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-line)] placeholder:text-fg-subtle", "transition-[box-shadow,background-color] duration-150 ease-out", "hover:shadow-[inset_0_0_0_1px_var(--color-line-strong)]", "focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-banana)]", "disabled:opacity-40", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("block text-xs font-medium tracking-wide text-fg-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-24 w-full resize-y rounded-md bg-ink-3 px-3.5 py-3 text-sm leading-normal text-fg shadow-[inset_0_0_0_1px_var(--color-line)] placeholder:text-fg-subtle", "transition-[box-shadow,background-color] duration-150 ease-out", "hover:shadow-[inset_0_0_0_1px_var(--color-line-strong)]", "focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-banana)]", "disabled:opacity-40", className),
		...props
	});
}
function ProfileForm({ profile, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "사진" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoDropzone, {
						photo: profile.photo,
						onPhoto: (photo) => onChange("photo", photo)
					}),
					profile.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "photo-pos",
								children: "얼굴 위치"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs tabular-nums text-fg-subtle",
								children: [profile.photoPos, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "photo-pos",
							type: "range",
							min: 0,
							max: 100,
							value: profile.photoPos,
							onChange: (e) => onChange("photoPos", Number(e.target.value)),
							className: "banada-range"
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "기본" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "이름",
						htmlFor: "name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							value: profile.name,
							onChange: (e) => onChange("name", e.target.value),
							placeholder: "이름",
							autoComplete: "name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "나이",
							htmlFor: "age",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "age",
								inputMode: "numeric",
								value: profile.age,
								onChange: (e) => onChange("age", e.target.value),
								placeholder: "28"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "직업",
							htmlFor: "job",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "job",
								value: profile.job,
								onChange: (e) => onChange("job", e.target.value),
								placeholder: "직업"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "피지컬" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "키 cm",
							htmlFor: "height",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "height",
								inputMode: "numeric",
								value: profile.height,
								onChange: (e) => onChange("height", e.target.value),
								placeholder: "165"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "사이즈",
							htmlFor: "cup",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "cup",
								value: profile.cupSize,
								onChange: (e) => onChange("cupSize", e.target.value),
								placeholder: "C컵"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "몸무게 kg",
							htmlFor: "weight",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "weight",
								inputMode: "numeric",
								value: profile.weight,
								onChange: (e) => onChange("weight", e.target.value),
								placeholder: "50"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "소개" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "매력 포인트",
						htmlFor: "charm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "charm",
							value: profile.charm,
							onChange: (e) => onChange("charm", e.target.value),
							placeholder: "한 줄로"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "한 줄 소개",
						htmlFor: "bio",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "bio",
							rows: 3,
							value: profile.bio,
							onChange: (e) => onChange("bio", e.target.value),
							placeholder: "나를 한 문장으로"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "관심사 · 쉼표로 구분",
						htmlFor: "hobbies",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "hobbies",
							value: profile.hobbies,
							onChange: (e) => onChange("hobbies", e.target.value),
							placeholder: "요가, 와인, 전시"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "카드 스타일" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: CARD_TEMPLATES.map((id) => {
						const meta = TEMPLATE_META[id];
						const selected = profile.template === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onChange("template", id),
							className: cn("flex h-16 flex-col items-start justify-center rounded-md px-3 text-left", "transition-[box-shadow,background-color] duration-150 ease-out", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-banana", selected ? "bg-banana text-ink" : "bg-ink-3 text-fg shadow-[inset_0_0_0_1px_var(--color-line)] hover:shadow-[inset_0_0_0_1px_var(--color-line-strong)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-semibold tracking-wide",
								children: meta.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs leading-tight", selected ? "text-ink/70" : "text-fg-subtle"),
								children: meta.hint
							})]
						}, id);
					})
				})]
			})
		]
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-xs font-semibold tracking-brand text-banana uppercase",
		children
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-banana disabled:pointer-events-none disabled:opacity-40 transition-[scale,background-color,color,opacity,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-banana text-ink hover:bg-banana-deep",
			secondary: "bg-ink-3 text-fg hover:bg-line-strong",
			ghost: "bg-transparent text-fg-muted hover:text-fg hover:bg-ink-3",
			outline: "bg-transparent text-banana shadow-[inset_0_0_0_1px_var(--color-banana)] hover:bg-banana hover:text-ink"
		},
		size: {
			sm: "h-9 px-3 text-sm rounded-sm",
			md: "h-11 px-4 text-sm rounded-md",
			lg: "h-12 px-5 text-base rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		type: asChild ? void 0 : type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var memoryStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {},
	clear: () => {},
	key: () => null,
	length: 0
};
var useProfileStore = create()(persist((set) => ({
	...DEFAULT_PROFILE,
	setField: (key, value) => set({ [key]: value }),
	reset: () => set({ ...DEFAULT_PROFILE })
}), {
	name: "banada-profile-v1",
	skipHydration: true,
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage : localStorage),
	partialize: (state) => {
		const { setField: _s, reset: _r, ...profile } = state;
		return profile;
	}
}));
function Studio() {
	const cardRef = (0, import_react.useRef)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const profile = useProfileStore();
	const { setField, reset } = profile;
	(0, import_react.useEffect)(() => {
		useProfileStore.persist.rehydrate();
	}, []);
	async function handleDownload() {
		const node = cardRef.current;
		if (!node) return;
		setSaving(true);
		try {
			await document.fonts.ready;
			const dataUrl = await toPng(node, {
				pixelRatio: 3,
				cacheBust: true,
				backgroundColor: profile.template === "ivory" ? "#f4efe3" : "#12110e"
			});
			const a = document.createElement("a");
			a.href = dataUrl;
			a.download = downloadName(profile.name);
			a.click();
			toast.success("카드를 저장했어요");
		} catch {
			toast.error("저장에 실패했어요. 다시 시도해 주세요.");
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-ink text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 banada-grain" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative z-10 border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BananaMark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold tracking-brand text-banana",
								children: "BANADA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs tracking-brand text-fg-subtle uppercase",
								children: "Profile studio"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-xs text-fg-subtle sm:block",
						children: "입력하는 즉시 카드가 바뀝니다"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-5 py-8 pb-28 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12 lg:py-10 lg:pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "min-w-0 w-full lg:col-start-2 lg:row-start-1 lg:sticky lg:top-8 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, {
								ref: cardRef,
								profile
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden w-full max-w-sm lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "w-full",
									onClick: () => void handleDownload(),
									disabled: saving,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										strokeWidth: 2
									}), saving ? "저장 중…" : "PNG로 저장"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hidden max-w-sm text-center text-xs leading-relaxed text-fg-subtle lg:block",
								children: "고해상도 이미지로 저장됩니다. 사진은 이 브라우저에만 남습니다."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 rounded-xl bg-ink-2 p-5 shadow-[inset_0_0_0_1px_var(--color-line)] sm:p-7 lg:col-start-1 lg:row-start-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-7 flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl font-semibold tracking-tight text-paper text-balance",
							children: "프로필 카드"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-fg-muted",
							children: "만남용 카드를 만들고 PNG로 내려받으세요."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => reset(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
								className: "size-3.5",
								strokeWidth: 2
							}), "초기화"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileForm, {
						profile,
						onChange: setField
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "banada-dock fixed inset-x-0 bottom-0 z-20 border-t border-line bg-ink/95 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					className: "w-full",
					onClick: () => void handleDownload(),
					disabled: saving,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "size-4",
						strokeWidth: 2
					}), saving ? "저장 중…" : "PNG로 저장"]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme: "dark",
		position: "bottom-center",
		toastOptions: { style: {
			background: "#1a1914",
			color: "#f4efe3",
			border: "1px solid rgba(244,239,227,0.12)",
			fontFamily: "\"Noto Sans KR\", sans-serif"
		} }
	})] });
}
//#endregion
export { Home as component };
