<script module>
  export const title = 'vim macros';
  export const date = '2024-01-10';
</script>

<p>Macros in vim are incredibly useful for repetitive tasks.</p>

<p>Record a macro with:</p>
<ul>
  <li><code>q&lt;register&gt;</code> - start recording (e.g., qa)</li>
  <li>... your commands ...</li>
  <li><code>q</code> - stop recording</li>
</ul>

<p>Play back with:</p>
<ul>
  <li><code>@&lt;register&gt;</code> - play (e.g., @a)</li>
  <li><code>@@</code> - repeat last macro</li>
  <li><code>10@a</code> - repeat 10 times</li>
</ul>

<p>Example: Replace all quotes with double quotes</p>
<pre><code>qa
:%s/'/"/g
q
@@</code></pre>