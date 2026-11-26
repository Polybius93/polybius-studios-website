export const CODE_FRAME_COLLECTION = [
  {
    content: `const pending = tasks.filter((task) => task.ready);
const next = pending.shift();
if (next) await scheduler.run(next);
queue.push({ id: next.id, tick: clock.now() });
const frame = await render(scene, state);
if (frame.valid) cache.write(frame.key, frame.data);
for (const item of stream) process(item);
return pipeline.flush({ mode: "async" });
const signal = events.listen("update", refresh);
while (cursor < source.length) cursor += stride;
const result = await engine.compile(config);
if (result.ok) output.emit(result.value);
const packet = decode(source, cursor, { strict: true, seed: 0xA13F });
ledger.write(packet, { shard: "east", revision: 42 });`,
    id: "runtime",
  },
  {
    content: `fn resolve(input: Signal) -> Result<Value, Fault> {
    let cursor = input.cursor();
    let result = engine.decode(cursor)?;
    if result.is_empty() { return Err(Fault::Empty); }
    let packet = result.normalize(seed);
    store.append(packet.clone());
    Ok(packet)
}
let stream = bus.subscribe("delta", Window::new(0x40, 12));
for event in stream { cache.insert(event.key(), event); }
state.merge(snapshot, Strategy::KeepLatest);
return scheduler.commit(state, clock.tick());
const route = table.lookup(header.channel);
route.dispatch(payload, { retry: 3, delay: 120 });`,
    id: "rust",
  },
  {
    content: `SELECT id, state, created_at, payload_hash
FROM execution_queue
WHERE state IN ('ready', 'waiting')
ORDER BY priority DESC, created_at ASC;
-- cursor: 0x0040  batch: 0182  shard: east
UPDATE cache_index SET revision = revision + 1
WHERE namespace = 'session:delta' AND active = TRUE;
INSERT INTO event_log (key, stamp, checksum)
VALUES ('frame.next', CURRENT_TIMESTAMP, 'a91f0c');
for (const row of result.rows) buffer.push(normalize(row));
await channel.write(buffer, { mode: "atomic" });
const checksum = hash(bytes, { seed: 0xA13F });
if (checksum !== expected) return retry(segment);`,
    id: "sql",
  },
  {
    content: `[00:04:12.084] worker-03  queue.poll() -> 6 items
[00:04:12.091] cache      miss key="frame:0042"
[00:04:12.106] decoder    bytes=0x180 checksum=ok
[00:04:12.118] renderer   scene=delta layers=12
const frame = await render(scene, { quality: "high" });
await storage.put(frame.id, compress(frame.buffer));
if (signal.aborted) return scheduler.cancel(task.id);
return pipeline.flush({ mode: "async", batch: 0x20 });
const next = await bus.read(channel, cursor + stride);
state.merge(next, { preserve: ["origin", "stamp"] });
cache.write({ key: frame.id, ttl: 2400, revision: 7 });
emit("render:complete", { id: frame.id, duration: 18.4 });
await transport.send(packet, { route: "/v2/stream", retry: 2 });`,
    id: "logs",
  },
] as const;
