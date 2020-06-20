const x = ['p0', 'p1', 'p2'];
call_me(x[0], x[1], x[2]);

function call_me (param0, param1, param2 ) {
    const args = ['p0', 'p1', 'p2'];
    call_me.apply(this, args);
}