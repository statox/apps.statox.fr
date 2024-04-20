const s=`[tags]: # '["tmux"]'
[title]: # 'Tmux'

### List sessions

\`\`\`bash
tmux list-sessions
\`\`\`

### Attach session

\`\`\`bash
tmux a -t [session-id]
\`\`\`
`;export{s as default};
