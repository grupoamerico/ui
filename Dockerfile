FROM node:20-alpine

WORKDIR /app

# Copy package manifests first for better layer caching
COPY package.json package-lock.json ./
COPY packages/ui/package.json packages/ui/
COPY packages/icons/package.json packages/icons/
COPY packages/previewer/package.json packages/previewer/

RUN npm ci

# Copy source code
COPY scripts/ scripts/
COPY tsconfig.base.json ./
COPY packages/ui/ packages/ui/
COPY packages/icons/ packages/icons/
COPY packages/previewer/ packages/previewer/

# Generate barrel files + registry, then build
RUN node scripts/generate-ui-barrel.mjs \
 && node scripts/generate-icons-barrel.mjs \
 && node scripts/generate-registry.mjs \
 && cd packages/previewer && npx vite build

EXPOSE 3000

CMD ["npx", "-w", "packages/previewer", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"]
