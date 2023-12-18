# reddit-clone

A basic Reddit clone.

## How to set up

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
