	"encoding/json"
	"fmt"
	"os"
	"strconv"
	"time"

	"github.com/unixpickle/kahoot-hack/kahoot"
@@ -15,11 +14,7 @@ func main() {
		fmt.Fprintln(os.Stderr, "Usage: crash <game pin> <nickname>")
		os.Exit(1)
	}
	gamePin, err := strconv.Atoi(os.Args[1])