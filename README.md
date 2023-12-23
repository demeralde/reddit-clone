# reddit-clone

This is a basic Reddit clone using the [T3 stack](https://github.com/t3-oss/create-t3-app).

## Technology

## 👨🏻‍💻 Development

1. Install dependencies:

```sh
pnpm install
```

2. Copy the `.env.example` file:

```sh
cp .env.example .env
```

Then edit `.env`, following the instructions in the file.

3. Deploy the DB schema:

```sh
pnpm run db:push
```

4. Run the dev server to view the app:

```sh
pnpm run dev
```

### 🛠️ Utility scripts

Lint the codebase with ESLint:

```sh
pnpm lint
pnpm lint:fix # Automatically fix errors
```

Format the codebase with Prettier:

```sh
pnpm prettier
pnpm prettier:fix # Automatically fix errors
```
