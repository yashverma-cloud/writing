---
title: 'Apply the plan you reviewed, not a fresh one'
description: 'A plain terraform apply builds a new plan. A saved plan file makes the apply run exactly what was reviewed.'
published: '2026-11-24'
draft: false
kind: note
---

The plan you approve in a pull request is not always the plan that runs.

If a pipeline runs terraform plan for review and a plain terraform apply later, the apply builds a fresh plan. Anything that changed in between, a merge, a console edit, another pipeline, lands in that second plan, and nobody reviewed it.

Terraform has had the fix for years. terraform plan -out=tfplan saves the plan to a file. terraform apply tfplan performs exactly those operations, with no prompt and no new planning. Passing the file is the approval, so -auto-approve has nothing left to do.

It also fails safely. If the state changed after the plan was written, apply stops with "Saved plan is stale" instead of guessing. Plan again, review again.

Two habits make it work. Apply the same file the reviewer saw, kept as a pipeline artifact, not one rebuilt after merge. And treat that file as sensitive: Terraform stores every value in it in cleartext, including the ones it hides in terminal output, so it gets short retention and tight access.

The rule I hold myself to: what gets applied is what got reviewed.
