RUN_MSG=" ✨  -- Lancement serveur port: 314 --  ✨"
SRV_MSG="✨ Lancement du serveur ✨"

all: run srv

run:
	@echo "${RUN_MSG}" &
	@echo ""
	@./loop.sh

srv:
	@node srv.js &
	@echo "${SRV_MSG}"
wk:
	@echo "✨ Lancement serveur LLMA✨" &
	@node worker.js