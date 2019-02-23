select *
from sneak_user
where username ilike $1
and password = $2;


