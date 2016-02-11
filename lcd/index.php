<?php get_header(); ?>
<div id="main">
<div id="content">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div id="postdate">
	<h4>[<?php the_time('m/d/y'); ?>] | <a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h4>
</div>
<div id="posttext">
<p><?php the_content(__('(more...)')); ?></p>
</div>
<hr><?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p><?php endif; ?>
</div>
<?php get_sidebar(); ?>
</div>
<div id="delimiter">
	<p><?php echo get_next_posts_link('NEXT',$the_query->max_num_pages); ?>
		 <?php echo get_previous_posts_link('PREV'); ?>
</p>
</div>
<?php get_footer(); ?>
