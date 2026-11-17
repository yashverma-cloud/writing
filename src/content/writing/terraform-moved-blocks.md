---
title: 'In a Terraform refactor, the plan should destroy nothing'
description: 'Renaming a resource in Terraform looks like tidying up. Terraform reads it as delete and recreate.'
published: '2026-11-17'
draft: false
kind: note
---

Renaming a resource in Terraform looks like tidying up. Terraform reads it as delete and recreate.

By default, a changed address is an instruction to destroy the object at the old address and create a new one at the new address. For a log bucket or an IAM role, that is not a refactor. It is an outage with a tidy diff.

The fix has been in the language since Terraform 1.1: a moved block. You declare the old address and the new one, and the next plan updates the address in state instead of touching the resource. It covers renames, moving a resource into a module, and switching a resource to count or for_each.

The rule I hold myself to: a refactor pull request is only a refactor if its plan adds nothing and destroys nothing. Anything else in that plan is a behaviour change, and it gets reviewed as one.

One more thing the documentation is clear on: keep the moved blocks. Removing one is a breaking change, because any configuration still on the old address will plan to delete the object instead of moving it. They cost nothing to keep, and they record how the code got here.
