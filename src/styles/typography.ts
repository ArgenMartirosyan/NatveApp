export const typography = {
  h1: {
    fontSize: 34,
    fontWeight: 'bold' as const,
    lineHeight: 41,
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold' as const,
    lineHeight: 34,
  },
  h3: {
    fontSize: 22,
    fontWeight: 'bold' as const,
    lineHeight: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 25,
  },
  body: {
    fontSize: 17,
    fontWeight: 'normal' as const,
    lineHeight: 22,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal' as const,
    lineHeight: 16,
  },
  footnote: {
    fontSize: 13,
    fontWeight: 'normal' as const,
    lineHeight: 18,
  },
} as const;