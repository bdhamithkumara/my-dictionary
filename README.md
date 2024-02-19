# Title: My-dictionary

## Crucial plan

> Make sure to follow this plan and always think about the big streams.<br>
> Never fall into the rabbit hole! => MVP FIRST
> Never try to do design.

- Try to finish MVP first and if any bugs are found, write them down on "Bugs" below this page.

1. Organize basic routing plans.
2. Connect auth
3. Create tables for the database.

- Let's make the card clickable so after clicking the definition and examples can be revealed.
- If url is signin or signup, let's hide header and footer.
- Dictionary API should be added. the fastest one!
- if same word is registered to the words, need to do something about it.

## Types

I have set the route-handler's return type on `src/types/routeReturnTypes.ts`.

```ts
import { NextResponse } from "next/server";

interface ReturnType {
  error: boolean | null;
  message: "ok" | string;
}

export type RouteReturnType = NextResponse<ReturnType>;
```

---

This is usable like this.

```ts
const POST = async (req: NextRequest): Promise<RouteReturnType> => {};
```

## What I did that I learned new

1. By setting the body height to 100dvh, the header and the footer will be always shown even on Safari or Android dynamic browsers.

### What to edit before promoting to the production

1. Supabase Auth setup -> SMTP Provider settings -> Minimum interval between emails being sent to 60 seconds.

### Bugs

1. Footer icons must be filled with purple color depending on the current URL. But when it goes to layout, it seems that the code is cached so the current URL won't be updated.
