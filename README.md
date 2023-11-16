# Promise Handle 🤌

The `PromiseHandle` exported from this package extends the `Promise` class to expose the `resolve` and `reject` functions passed through the constructor as member functions.

Here's a few examples on how to use the `promise-handle` package.

<table>
<tr>
<th>After 🥳</th>
<th>Before 😭</th>
</tr>
<tr>
<td  valign="top">

```typescript
import { PromiseHandle } from "promise-handle";
const handle = new PromiseHandle();
emitter.on("even", handle.resolve);
await handle;
```

</td>
<td valign="top">

```typescript
await new Promise((resolve) => {
  emitter.on("even", (event) => {
    resolve(event);
  });
});
```

</td>
</tr>
<tr>
<td valign="top">

```typescript
import { PromiseHandle } from "promise-handle";
const handle = new PromiseHandle();
await something({
  callback() {
    handle.resolve();
  }
});
await handle;
```

</td>
<td valign="top">

```typescript
let inner;
const callback = new Promise((resolve) => {
  inner = something({
    callback() {
      resolve();
    }
  });
});
await inner;
await callback;
```

</td>
</tr>
</table>


## But why? 🤷

I've written and added this small utility class into five code-bases already and I thought I might as well get it into the NPM registry to get it handy next time around.
