DELETE
from shoe
where id = $1;

select *
from shoe
where user_id = $2