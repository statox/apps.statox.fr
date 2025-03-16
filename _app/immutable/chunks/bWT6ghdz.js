const n=`[tags]: # '["bash", "xargs"]'
[title]: # 'Xargs'

Super useful [opinionated guide to xargs](https://www.oilshell.org/blog/2021/08/xargs.html)

### Examples

\`\`\`bash
# Don't split input
echo "alice bob" | xargs echo hi
# hi alice bob

# Split input by whitespace and specify a number for each command
echo "alice bob" | xargs -n 1 echo hi
# hi alice
# hi bob

# Split input by new line
ls | egrep 'pack' | xargs -d $'\\n' -- ls -l
# -rw-rw-r-- 1 afabre afabre   1286 aout  21 21:05 package.json
# -rw-rw-r-- 1 afabre afabre 162685 aout  21 21:05 package-lock.json

# Run in parallel with -P
xargs -P
\`\`\`
`;export{n as default};
