#!/bin/bash
echo "Label and taint database node"
kubectl label node $1 type=high-memory
kubectl taint nodes $1 database-only=true:NoSchedule
