<?php get_header(); ?>
<div id="main">
<div id="content">
<?php while(have_posts() ) : the_post(); ?>
	<?php the_content(); ?>
</div>
<?php endwhile; ?>
</div>
<?php get_sidebar(); ?>
</div>
<div id="delimiter">
<p> <a href="<?php echo esc_url(home_url('/'));?>">[HOME]</a></p>
<?php get_footer(); ?>
