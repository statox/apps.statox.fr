[tags]: # '["git", "commit"]'
[title]: # 'Git commit fixes'

See [sethrobertson original page](https://sethrobertson.github.io/GitFixUm/fixup.html)
or [this one](https://sukima.github.io/GitFixUm/) with a better UI.

TODO: Extract the ones I need but can never remember

### Remove commit from history

_Reminder on zsh escape `^` in `HEAD^` with `HEAD\^`_

Remove the last commit from history but keep the working tree

```bash
git reset HEAD^
```

Remove the last commit of the history completely **and discard changes**

```bash
git reset --hard HEAD^ # THIS DISCARDS CHANGES
```

### Sign an older commit in your branch

This will do an interactive rebase, playing `git commit --amend --no-edit -n -S`
after each commit

_(Check if `-n` is useful I can't find it in the man)_

```bash
git rebase --exec 'git commit --amend --no-edit -n -S' -i my-branch
```

### Change the date of a commit

Additional details in [this SO answer](https://stackoverflow.com/a/3898842)

```bash
GIT_COMMITTER_DATE="Wed, 28 Jul 2021 08:12:19 +0200" GIT_AUTHOR_DATE="Wed, 28 Jul 2021 08:12:19 +0200" git commit
git rebase --exec 'GIT_COMMITTER_DATE="$(now)" git commit --amend --no-edit --reset-author --date=now' -i my-branch
```

Date formats

```plaintext
Git internal format = <unix timestamp> <time zone offset>, e.g.  1112926393 +0200
                    <unix timestamp> is the number of seconds since the UNIX epoch.
                    <time zone offset> is a positive or negative offset from UTC. (E.g CEST is +0200)
RFC 2822            = e.g. Thu, 07 Apr 2005 22:13:13 +0200
ISO 8601            = e.g. 2005-04-07T22:13:13
```

### Change the author and commiter of all commits but keep the original dates

```bash
# First make sure that `.git/config` has the proper [user] section

git -c rebase.instructionFormat='%s%nexec GIT_COMMITTER_DATE="%cD" GIT_AUTHOR_DATE="%aD" git commit --amend --no-edit --reset-author' rebase (-i [commit] or --root)
```

### Get the logs of a specific line

See [this SO answer](https://stackoverflow.com/a/50473741)

```bash
git log -L '/the line from your file/,+1:path/to/your/file.txt'
```

or with line number:

```bash
git log -L15,+1:'path/to/your/file.txt'
```

or with a funcname:

```bash
git log -L :<funcname>:<file>
```

### Auto fix commits

To fix an existing commit `aaaaaa`:

```bash
# Do changes
git commit --fixup aaaaaa
git rebase -i --autosquash master
```

`-i --autosquash` will open an interactive rebase but the fixup commits are already ready.
